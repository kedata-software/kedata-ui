import { fs, $ } from 'zx';

const iconsDir = '../icons/src';

async function main() {
  let listIcons = fs.readdirSync(iconsDir);

  fs.removeSync('./src');
  fs.mkdirSync('./src');

  for (const icon of listIcons) {
    await generateIcon(icon);
  }

  const entryPoints = listIcons.map((icon) => {
    const iconName = icon.replace('.svg', '');

    return `export { default as ${iconName} } from './${iconName}';`;
  });

  await fs.writeFile('./src/index.ts', entryPoints.join('\n'));
  await $`prettier --write ./src/index.ts`;
}

const generateIcon = async (icon: string) => {
  const iconName = icon.replace('.svg', '');

  let svg = await fs.readFile(`${iconsDir}/${icon}`, 'utf-8');
  let svgTag = svg.match(/<svg.+>/)?.[0]!;
  let spreadSvgTag = svgTag?.replace('>', ' {...props}>');
  svg = svg
    .replace(svgTag, spreadSvgTag)
    .replace('width="24"', 'width="1em"')
    .replace('height="24"', 'height="1em"');

  const jsCode = `
    import type { Component, JSX } from 'solid-js';

    const ${iconName}: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
      return (
        ${svg}
      )
    }

    export default ${iconName};
  `;

  await fs.mkdir(`./src/${iconName}`, { recursive: true });

  await Promise.all([
    fs.writeFile(`./src/${iconName}/${iconName}.tsx`, jsCode),
    fs.writeFile(
      `./src/${iconName}/index.ts`,
      `export { default } from './${iconName}';`,
    ),
  ]);

  await Promise.all([
    $`prettier --write ./src/${iconName}/${iconName}.tsx`,
    $`prettier --write ./src/${iconName}/index.ts`,
  ]);
};

main();
