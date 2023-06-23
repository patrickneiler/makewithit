import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { SMARTPHONE } from './smartphone';
import { BRAIN } from './brain';
import { A_I } from './ai';
import { FLOW_CHART } from './flow-chart';
import { AUTOMATION } from './automation';
import { CHAT_BOT } from './chat-bot';
import { SERVER } from './server';
import { GRADUATION } from './graduation';
import { BOT } from './bot';
import { COMPUTER } from './computer';
import { CLOUD_COMPUTING } from './cloud-computing';
import { DEVELOPMENT } from './development';
import { BRAIN_SERVER } from './brain-server';
import { COMPUTING } from './computing';
import { FILTER } from './filter';
import { GAMING } from './gaming';
import { CLOUD } from './cloud';
import { PC } from './pc';
import { EYE } from './eye';
import { SHIELD } from './shield';
import { MAGNIFYING } from './magnifying';
import { HUMANOID } from './humanoid';
import { CHIP } from './chip';
import { MOBILE } from './mobile';
import { TOUCH } from './touch';
import { BINORY } from './binory';
import { BOOK } from './book';
let icons: AnimatedIconType[] = [
  SMARTPHONE,
  BRAIN,
  A_I,
  FLOW_CHART,
  CLOUD,
  AUTOMATION,
  CHAT_BOT,
  SERVER,
  GRADUATION,
  BOT,
  COMPUTER,
  CLOUD_COMPUTING,
  DEVELOPMENT,
  BRAIN_SERVER,
  COMPUTING,
  FILTER,
  GAMING,
  PC,
  EYE,
  SHIELD,
  MAGNIFYING,
  HUMANOID,
  CHIP,
  MOBILE,
  TOUCH,
  BINORY,
  BOOK,
];
export const ArtificialIntelligenceCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Artificial Intelligence',
    className: 'ArtificialIntelligence',
    propertyName: 'artificialIntelligence',
    constantName: 'ARTIFICIAL_INTELLIGENCE',
    fileName: 'artificial-intelligence',
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
