import { fetch, fs } from 'zx';
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const apiUrl = process.env.FIGMA_API_URL!;
const apiKey = process.env.FIGMA_API_KEY!;
const fileId = process.env.FIGMA_FILE_ID!;
const iconCanvasId = process.env.FIGMA_ICON_CANVAS_ID!;
const prefixIcon = process.env.PREFIX_ICON!;

async function main() {
  const result = await fetchFigmaFile(fileId);
  const iconCanvas = result.document.children.find(
    (child) => child.id === iconCanvasId,
  );
  let componentSets = iconCanvas.children
    .filter((child) => child.type === 'COMPONENT_SET')
    .map((item) => {
      return {
        id: item.id,
        name: item.name,
        children: item.children,
      };
    });
  const icons: { id: string; name: string }[] = [];
  for (const componentSet of componentSets) {
    const nameSet = `${prefixIcon}${componentSet.name}`;
    for (const child of componentSet.children) {
      let childName = child.name
        .replace('Type=', '')
        .replace('Property 1=', '');
      childName = `${nameSet}${childName}`
        .trim()
        .replaceAll(' ', '')
        .replaceAll('-', '');
      icons.push({
        id: child.id,
        name: childName,
      });
    }
  }
  const svgResult = await getSVGsFromComponents(fileId)(icons);
  fs.removeSync('./src');
  fs.mkdirSync('./src');
  for (const item of svgResult) {
    let svg = item.svg
      .replaceAll('#0F172A', 'currentColor')
      .replaceAll('black', 'currentColor');
    fs.writeFile(`./src/${item.name}.svg`, svg);
  }
}

const fetchFigmaFile = async (key: string) => {
  return fetch(`${apiUrl}/v1/files/${key}`, {
    headers: { 'X-Figma-Token': apiKey },
  }).then((response) => response.json());
};

const getSVGsFromComponents = (key) => (components) => {
  const ids = components.map(({ id }) => id);
  return fetch(`${apiUrl}/v1/images/${key}?ids=${ids.join()}&format=svg`, {
    headers: { 'X-Figma-Token': apiKey },
  })
    .then((response) => response.json())
    .then(({ images }) =>
      Promise.all(
        components.map(({ id, name }) => {
          return fetch(images[id])
            .then((response) => response.text())
            .then((svg) => {
              return {
                nodeId: id,
                name: name,
                svg,
              };
            });
        }),
      ),
    );
};

main();
