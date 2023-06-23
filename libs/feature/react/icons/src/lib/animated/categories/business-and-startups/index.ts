import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { BRAIN } from './brain';
import { BULB } from './bulb';
import { BUSINESS_CARD } from './business-card';
import { CONTRACT } from './contract';
import { CLOUD } from './cloud';
import { CHAIR } from './chair';
import { DEBT } from './debt';
import { DIAMOND } from './diamond';
import { DIRCTION } from './dirction';
import { EXECUTE } from './execute';
import { DOCUMENT } from './document';
import { DIVIDED_PIE } from './divided-pie';
import { FLOW_CHART } from './flow-chart';
import { GOAL } from './goal';
import { OFFICE_BUILDING } from './office-building';
import { IDEA } from './idea';
import { PROGRESS } from './progress';
import { REASEARCH } from './reasearch';
import { SETUP } from './setup';
import { WINNER } from './winner';
import { SUCCESS } from './success';
import { WORKER } from './worker';
import { TIE } from './tie';
import { TIME } from './time';
import { SCALE } from './scale';
import { STOPWATCH } from './stopwatch';
import { RATING } from './rating';
import { PLAN } from './plan';
import { GLOBAL_BUSINESS } from './global-business';
import { I_D } from './id';
import { MAN } from './man';
import { LAW } from './law';
import { GROWTH } from './growth';
import { FOCUS } from './focus';
import { GRAPH } from './graph';
import { I_PO } from './ipo';
import { PAPER_PLANE } from './paper-plane';
import { PUZZEL } from './puzzel';
import { ROAD_TO_SUCCESS } from './road-to-success';
import { STARTUP } from './startup';
let icons: AnimatedIconType[] = [
  BRAIN,
  BULB,
  BUSINESS_CARD,
  CONTRACT,
  CLOUD,
  CHAIR,
  DEBT,
  DIAMOND,
  DIRCTION,
  EXECUTE,
  DOCUMENT,
  DIVIDED_PIE,
  FLOW_CHART,
  GOAL,
  OFFICE_BUILDING,
  IDEA,
  PROGRESS,
  REASEARCH,
  SETUP,
  WINNER,
  SUCCESS,
  WORKER,
  TIE,
  TIME,
  SCALE,
  STOPWATCH,
  RATING,
  PLAN,
  GLOBAL_BUSINESS,
  I_D,
  MAN,
  LAW,
  GROWTH,
  FOCUS,
  GRAPH,
  I_PO,
  PAPER_PLANE,
  PUZZEL,
  ROAD_TO_SUCCESS,
  STARTUP,
];
export const BusinessAndStartupsCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Business and Startups',
    className: 'BusinessAndStartups',
    propertyName: 'businessAndStartups',
    constantName: 'BUSINESS_AND_STARTUPS',
    fileName: 'business-and-startups',
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
