import { AnimatedIconType, Names } from "@the/feature/react/icons"
export function generateCategoryIndexFile(icons: AnimatedIconType[], categoryNames: Names) {
  return (`
  import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
  ${icons.map(icon => (
      `import { ${icon.names.constantName} } from './${icon.names.fileName}';`
  )).join(' ')}
  let icons: AnimatedIconType[] = [
    ${icons.map(icon => icon.names.constantName).toString()}
  ]
  export const  ${categoryNames.className}Category: AnimatedIconCategoryType = (iconName?: string) => {
    const names = ${JSON.stringify(categoryNames)}
    icons = icons.map(_icon => ({
      ..._icon,
      icon: _icon.icon
    }));
    return {
      names: names,
      icons: icons.map(icon => ({ names: icon.names })),
      icon: icons.find(icon => icon.names.constantName === iconName)
    }
  }`
  )
}