import { fs, $ } from 'zx';

const iconsDir = '../svg-icons/src';

async function main() {
  let listIcons = fs.readdirSync(iconsDir);

  fs.removeSync('./src');
  fs.mkdirSync('./src');

  for (const icon of listIcons) {
    await generateIcon(icon);
  }

  const entryPoints = listIcons.map((icon: any) => {
    const iconName = icon.replace('.svg', '');

    return `export { default as ${iconName} } from './${iconName}';`;
  });

  await fs.writeFile('./src/index.js', entryPoints.join('\n'));
  await $`prettier --write ./src/index.js`;
}

const generateIcon = async (icon: string) => {
  const iconName = icon.replace('.svg', '');

  let svg = await fs.readFile(`${iconsDir}/${icon}`, 'utf-8');
  let svgTag = svg.match(/<svg.+>/)?.[0]!;
  let spreadSvgTag = svgTag?.replace('<svg', '<svg v-bind="props" ');
  svg = svg
    .replace(svgTag, spreadSvgTag)
    .replace('width="24"', 'width="1em"')
    .replace('height="24"', 'height="1em"');

  const jsCode = `
    <script setup lang="ts">
    import type { SVGAttributes } from "vue";

    interface Props extends /* @vue-ignore */ SVGAttributes {}
    const props = defineProps<Props>();
    </script>
    <template>
      ${svg}
    </template>
  `;

  await fs.mkdir(`./src/${iconName}`, { recursive: true });

  await Promise.all([
    fs.writeFile(`./src/${iconName}/${iconName}.vue`, jsCode),
    fs.writeFile(
      `./src/${iconName}/index.js`,
      `export { default } from './${iconName}.vue';`,
    ),
  ]);

  await Promise.all([
    $`prettier --write ./src/${iconName}/${iconName}.vue`,
    $`prettier --write ./src/${iconName}/index.js`,
  ]);
};

main();
