import { join } from 'path';
import { GenerateIconsOptions } from './schema';
import { names, formatFiles, readJson, readProjectConfiguration, Tree } from '@nx/devkit';
import { AnimatedIconType, AnimationData } from '@the/feature/react/icons';
import { generateCategoryIndexFile } from './files/categories/category';

type Names = {
  name: string;
    className: string;
    propertyName: string;
    constantName: string;
    fileName: string;
    displayName?: string;
}

const CATEGORY_IMPORT = '/* CategoryImport */';
const CATEGORIES = '/* Categories */';
const CATEGORY_NAMES = '/* CategoryNames */';

export default async function generateIconsGenerator(
  tree: Tree,
  options: GenerateIconsOptions
) {
  const categoryNames: Names = names(options.category);
  const sourceRoot = readProjectConfiguration(tree, 'feature-react-icons').sourceRoot;
  const sourceFilePath = `${sourceRoot}/raw/${categoryNames.fileName}.json`;

  // Update the root index file
  options.addToIndex && updateSrcIndex(tree, sourceRoot, categoryNames);
  // Loop through assets within source JSON, create new directory and files, return the array of animations
  const animatedIcons = generateAnimatedIcons(tree, sourceFilePath);
  // Create index file for category
  createCategoryIndexFile(tree, sourceRoot, categoryNames, animatedIcons);
  generateAnimatedIconFiles(tree, sourceRoot, animatedIcons, categoryNames);

  await formatFiles(tree);

  return () => {
    console.log(`Generated ${animatedIcons.length} icons successfully!`);
  };
}

function generateAnimatedIcons(tree: Tree, filePath: string): AnimatedIconType[] {
  const comp = JSON.parse(tree.read(filePath).toString());
    // if scripts is undefined, set it to an empty object
  const animationAssets: AnimationData[] = comp.assets ?? [];
  return animationAssets.map((asset) => {
    const assetName = trimIconName(asset.nm);
    const icon = {
      v: '5.9.0',
      fr: 60,
      ip: 0,
      op: comp.op || 600,
      h: 1000,
      w: 1000,
      layers: asset.layers,
      nm: asset.nm,
      id: asset.id.toString()
    }
    const iconNames = {
      ...names(assetName),
      displayName: assetName
    };
    return {
      names: iconNames,
      icon: JSON.stringify(icon)
    }
  });
}

function generateAnimatedIconFiles(tree: Tree, sourceRoot: string, animatedIcons: AnimatedIconType[], categoryNames: Names) {
  animatedIcons.map((animation) => {
    const path = generateIconFilePath(sourceRoot, categoryNames, animation.names);
    const content = generateIconFile(animation);
    tree.write(path, content);
  })
}

function trimIconName(name: string): string | null {
  console.log(name);
  const animationDelimiter = ' Ani';
  const animationDelimiterIndex = name.indexOf(animationDelimiter);
  let newName = name;
  if (animationDelimiterIndex > -1) {
    newName = name.slice(0, animationDelimiterIndex);
    console.log(newName);

  }
  let delimiter = '- ';
  let delimiterIndex = newName.indexOf(delimiter);
  if (delimiterIndex === -1) {
    delimiter = ' -'
    delimiterIndex = newName.indexOf(delimiter);
  }
  newName = delimiterIndex > -1 && newName.slice(delimiterIndex + delimiter.length)
  return newName.trim();
}

function createCategoryIndexFile(tree, root, categoryNames: Names, animations: AnimatedIconType[]) {
  const indexFilePath = generateIndexFilePath(root, categoryNames);
  const indexFileContent  = generateCategoryIndexFile(animations, categoryNames);
  return tree.write(indexFilePath, indexFileContent);
}

function updateSrcIndex(tree: Tree, sourceRoot: string, categoryNames: Names) {
  const path = `${sourceRoot}/lib/animated/categories/index.ts`;
  const contents = tree.read(path).toString();
  let newContents = contents.replace(CATEGORY_IMPORT, `import { ${categoryNames.className}Category } from './${categoryNames.fileName}'; ${CATEGORY_IMPORT}`);
  newContents = newContents.replace(CATEGORIES, `, {
    category: ${categoryNames.className}Category,
    names: ${JSON.stringify(categoryNames)}
  }${CATEGORIES}`)
  newContents = newContents.replace(CATEGORY_NAMES, `, ${JSON.stringify(categoryNames)} ${CATEGORY_NAMES}`)
  tree.write(path, newContents);
}

function generateIconFilePath(sourceRoot: string, categoryNames: Names, iconName: Names): string {
  const outputDir = `${sourceRoot}/lib/animated/categories/${categoryNames.fileName}`;
  const fileName = `${iconName.fileName}.ts`;
  const path = join(outputDir, fileName);
  return path;
}

function generateIconFile(animatedIcon: AnimatedIconType): string {
  const names = JSON.stringify(animatedIcon.names)
  const icon = animatedIcon.icon
  return `
    import { AnimatedIconType } from "../../";
    export const ${animatedIcon.names.constantName}: AnimatedIconType = 
    {
      names: ${names},
      icon: ${JSON.stringify(icon)}
    }`
}

function generateIndexFilePath(sourceRoot: string, categoryNames: Names) {
  const outputDir = `${sourceRoot}/lib/animated/categories/${categoryNames.fileName}`;
  const fileName = `index.ts`;
  return join(outputDir, fileName);
}