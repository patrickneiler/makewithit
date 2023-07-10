import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { POLYGON02_ANIMATION05 } from './polygon-02-animation-05';
import { POLYGON02_ANIMATION10 } from './polygon-02-animation-10';
import { POLYGON02_ANIMATION08 } from './polygon-02-animation-08';
import { POLYGON02_ANIMATION02 } from './polygon-02-animation-02';
import { POLYGON02_ANIMATION07 } from './polygon-02-animation-07';
import { POLYGON02_ANIMATION03 } from './polygon-02-animation-03';
import { POLYGON02_ANIMATION09 } from './polygon-02-animation-09';
import { POLYGON02_ANIMATION06 } from './polygon-02-animation-06';
import { POLYGON02_ANIMATION01 } from './polygon-02-animation-01';
import { POLYGON02_ANIMATION04 } from './polygon-02-animation-04';
let icons: AnimatedIconType[] = [
  POLYGON02_ANIMATION05,
  POLYGON02_ANIMATION10,
  POLYGON02_ANIMATION08,
  POLYGON02_ANIMATION02,
  POLYGON02_ANIMATION07,
  POLYGON02_ANIMATION03,
  POLYGON02_ANIMATION09,
  POLYGON02_ANIMATION06,
  POLYGON02_ANIMATION01,
  POLYGON02_ANIMATION04,
];
export const JarvisCategory: AnimatedIconCategoryType = (iconName?: string) => {
  const names = {
    name: 'Jarvis',
    className: 'Jarvis',
    propertyName: 'jarvis',
    constantName: 'JARVIS',
    fileName: 'jarvis',
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
