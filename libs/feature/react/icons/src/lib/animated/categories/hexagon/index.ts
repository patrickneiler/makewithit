import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { POLYGON11 } from './polygon-11';
import { POLYGON12 } from './polygon-12';
import { POLYGON13 } from './polygon-13';
import { POLYGON14 } from './polygon-14';
import { POLYGON10 } from './polygon-10';
import { POLYGON09 } from './polygon-09';
import { POLYGON08 } from './polygon-08';
import { POLYGON07 } from './polygon-07';
import { POLYGON06 } from './polygon-06';
import { POLYGON05 } from './polygon-05';
import { POLYGON04 } from './polygon-04';
import { POLYGON03 } from './polygon-03';
import { POINTER10 } from './pointer-10';
import { POINTER11 } from './pointer-11';
import { POINTER12 } from './pointer-12';
import { POINTER13 } from './pointer-13';
import { POINTER14 } from './pointer-14';
import { POLYGON01 } from './polygon-01';
import { POLYGON02 } from './polygon-02';
import { SHAPES_SOFT09 } from './shapes-soft-09';
import { SHAPES_SOFT10 } from './shapes-soft-10';
import { SHAPES_SOFT08 } from './shapes-soft-08';
import { SHAPES_SOFT07 } from './shapes-soft-07';
import { SHAPES_SOFT06 } from './shapes-soft-06';
import { SHAPES_SOFT04 } from './shapes-soft-04';
import { CIRCLE_ELEMENTS02 } from './circle-elements-02';
import { CIRCLE_ELEMENTS04 } from './circle-elements-04';
import { CIRCLE_ELEMENTS03 } from './circle-elements-03';
import { CIRCLE_ELEMENTS01 } from './circle-elements-01';
import { CIRCLE_ELEMENTS05 } from './circle-elements-05';
import { CIRCLE_ELEMENTS09 } from './circle-elements-09';
import { CIRCLE_ELEMENTS13 } from './circle-elements-13';
import { CIRCLE_ELEMENTS08 } from './circle-elements-08';
import { CIRCLE_ELEMENTS07 } from './circle-elements-07';
import { CIRCLE_ELEMENTS11 } from './circle-elements-11';
import { CIRCLE_ELEMENTS06 } from './circle-elements-06';
import { CIRCLE_ELEMENTS10 } from './circle-elements-10';
import { CIRCLE_ELEMENTS14 } from './circle-elements-14';
import { CIRCLE_ELEMENTS15 } from './circle-elements-15';
import { CIRCLE_ELEMENTS12 } from './circle-elements-12';
import { CIRCLE_ELEMENTS16 } from './circle-elements-16';
import { CIRCLE_ELEMENTS17 } from './circle-elements-17';
import { TECH_LINES_STRAIGHT03 } from './tech-lines-straight-03';
import { TECH_LINES_STRAIGHT04 } from './tech-lines-straight-04';
import { TECH_LINES_STRAIGHT05 } from './tech-lines-straight-05';
import { TECH_LINES_STRAIGHT01 } from './tech-lines-straight-01';
import { TECH_LINES_STRAIGHT02 } from './tech-lines-straight-02';
import { TECH_LINES_FULL01 } from './tech-lines-full-01';
import { TECH_LINES_FULL02 } from './tech-lines-full-02';
import { TECH_LINES_FULL03 } from './tech-lines-full-03';
import { SHAPES_SOFT05 } from './shapes-soft-05';
import { SHAPES_SOFT01 } from './shapes-soft-01';
import { SHAPES_SOFT02 } from './shapes-soft-02';
import { SHAPES_SOFT03 } from './shapes-soft-03';
import { TARGET01 } from './target-01';
import { TARGET02 } from './target-02';
import { TARGET03 } from './target-03';
let icons: AnimatedIconType[] = [
  POLYGON11,
  POLYGON12,
  POLYGON13,
  POLYGON14,
  POLYGON10,
  POLYGON09,
  POLYGON08,
  POLYGON07,
  POLYGON06,
  POLYGON05,
  POLYGON04,
  POLYGON03,
  POINTER10,
  POINTER11,
  POINTER12,
  POINTER13,
  POINTER14,
  POLYGON01,
  POLYGON02,
  SHAPES_SOFT09,
  SHAPES_SOFT10,
  SHAPES_SOFT08,
  SHAPES_SOFT07,
  SHAPES_SOFT06,
  SHAPES_SOFT04,
  CIRCLE_ELEMENTS02,
  CIRCLE_ELEMENTS04,
  CIRCLE_ELEMENTS03,
  CIRCLE_ELEMENTS01,
  CIRCLE_ELEMENTS05,
  CIRCLE_ELEMENTS09,
  CIRCLE_ELEMENTS13,
  CIRCLE_ELEMENTS08,
  CIRCLE_ELEMENTS07,
  CIRCLE_ELEMENTS11,
  CIRCLE_ELEMENTS06,
  CIRCLE_ELEMENTS10,
  CIRCLE_ELEMENTS14,
  CIRCLE_ELEMENTS15,
  CIRCLE_ELEMENTS12,
  CIRCLE_ELEMENTS16,
  CIRCLE_ELEMENTS17,
  TECH_LINES_STRAIGHT03,
  TECH_LINES_STRAIGHT04,
  TECH_LINES_STRAIGHT05,
  TECH_LINES_STRAIGHT01,
  TECH_LINES_STRAIGHT02,
  TECH_LINES_FULL01,
  TECH_LINES_FULL02,
  TECH_LINES_FULL03,
  SHAPES_SOFT05,
  SHAPES_SOFT01,
  SHAPES_SOFT02,
  SHAPES_SOFT03,
  TARGET01,
  TARGET02,
  TARGET03,
];
export const HexagonCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Hexagon',
    className: 'Hexagon',
    propertyName: 'hexagon',
    constantName: 'HEXAGON',
    fileName: 'hexagon',
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
