import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { FRAME01 } from './frame-01';
import { FRAME02 } from './frame-02';
import { FRAME03 } from './frame-03';
import { FRAME04 } from './frame-04';
import { FRAME05 } from './frame-05';
import { FRAME06 } from './frame-06';
import { FRAME07 } from './frame-07';
import { FRAME08 } from './frame-08';
import { FRAME09 } from './frame-09';
import { FRAME10 } from './frame-10';
let icons: AnimatedIconType[] = [
  FRAME01,
  FRAME02,
  FRAME03,
  FRAME04,
  FRAME05,
  FRAME06,
  FRAME07,
  FRAME08,
  FRAME09,
  FRAME10,
];
export const CyberpunkFramesCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Cyberpunk Frames',
    className: 'CyberpunkFrames',
    propertyName: 'cyberpunkFrames',
    constantName: 'CYBERPUNK_FRAMES',
    fileName: 'cyberpunk-frames',
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
