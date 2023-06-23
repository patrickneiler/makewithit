import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { PAPERS } from './papers';
import { WORLD_SETTING } from './world-setting';
import { HOME_LINES } from './home-lines';
import { LAPTOP } from './laptop';
import { CLOUD_FILE } from './cloud-file';
import { COMPUTER_WITH_NOTES } from './computer-with-notes';
import { WEB_SITE_SETTINGS } from './web-site-settings';
import { A_PISETTINGS } from './api-settings';
import { CHART } from './chart';
import { COLOR_STRIPS } from './color-strips';
import { NOTES } from './notes';
import { SERACH } from './serach';
import { PEN_SCREEN } from './pen-screen';
import { BOY_LAPTOP } from './boy-&-laptop';
import { WEBSITE } from './website';
import { ELEMENTS } from './elements';
import { IDEA } from './idea';
import { SETTINGS } from './settings';
import { SCREEN_SETTING } from './screen-setting';
import { FRAME } from './frame';
import { PIN } from './pin';
import { LOCK_PASSWARD } from './lock-passward';
import { WEB_SITE_SCREEN } from './web-site-screen';
import { SOFT_WARE_FILE2 } from './soft-ware-file-2';
import { COMPUTER404 } from './computer-404';
import { SHOPPING } from './shopping';
import { SOFT_WARE_FILE } from './soft-ware-file';
import { SCREEN_DETAILS } from './screen-details';
import { COMPUTER } from './computer';
import { MOBILE_SETTINGS } from './mobile-settings';
import { PEOPLE } from './people';
import { SCREEN_LINES } from './screen-lines';
import { NUMBERS } from './numbers';
import { LAPTOP_MOBILE } from './laptop-&-mobile';
import { REVIEW } from './review';
import { SCREEN_MEMBERS } from './screen-members';
import { CLOUD_SERVER } from './cloud-server';
import { SCREEN_SETTINGS } from './screen-settings';
import { LOCK_HTTPS } from './lock-https';
import { SERVER_WIFI } from './server-wifi';
import { CLOUD_DETA } from './cloud-deta';
let icons: AnimatedIconType[] = [
  PAPERS,
  WORLD_SETTING,
  HOME_LINES,
  LAPTOP,
  CLOUD_FILE,
  COMPUTER_WITH_NOTES,
  WEB_SITE_SETTINGS,
  A_PISETTINGS,
  CHART,
  COLOR_STRIPS,
  NOTES,
  SERACH,
  PEN_SCREEN,
  BOY_LAPTOP,
  WEBSITE,
  ELEMENTS,
  IDEA,
  SETTINGS,
  SCREEN_SETTING,
  FRAME,
  PIN,
  LOCK_PASSWARD,
  WEB_SITE_SCREEN,
  SOFT_WARE_FILE2,
  COMPUTER404,
  SHOPPING,
  SOFT_WARE_FILE,
  SCREEN_DETAILS,
  COMPUTER,
  MOBILE_SETTINGS,
  PEOPLE,
  SCREEN_LINES,
  NUMBERS,
  LAPTOP_MOBILE,
  REVIEW,
  SCREEN_MEMBERS,
  CLOUD_SERVER,
  SCREEN_SETTINGS,
  LOCK_HTTPS,
  SERVER_WIFI,
  CLOUD_DETA,
];
export const WebDevelopmentCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Web Development',
    className: 'WebDevelopment',
    propertyName: 'webDevelopment',
    constantName: 'WEB_DEVELOPMENT',
    fileName: 'web-development',
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
