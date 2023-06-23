import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { COFFEE } from './coffee';
import { CHIKEN } from './chiken';
import { PIZZA } from './pizza';
import { ICE_CREAM_CONE } from './ice-cream-cone';
import { CHINESE_FOOD } from './chinese-food';
let icons: AnimatedIconType[] = [
  COFFEE,
  CHIKEN,
  PIZZA,
  CHINESE_FOOD,
];
export const FoodAndDrinkCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Food and Drink',
    className: 'FoodAndDrink',
    propertyName: 'foodAndDrink',
    constantName: 'FOOD_AND_DRINK',
    fileName: 'food-and-drink',
  };
  icons = icons.map((_icon) => ({
    ..._icon,
    icon: _icon.icon,
  }));
  return {
    names: names,
    icons: icons.map((icon) => ({ names: icon.names })),
    icon: icons.find((icon) => icon.names.constantName === iconName),
  };
};
