import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { AVATER } from './avater';
import { BOOKMARK } from './bookmark';
import { BATTERY_CHARGING } from './battery-charging';
import { CALENDER } from './calender';
import { CART } from './cart';
import { FAST_FORWARD } from './fast-forward';
import { EYE } from './eye';
import { CROP } from './crop';
import { FOLDER } from './folder';
import { FRAME } from './frame';
import { CHAT } from './chat';
import { MIC } from './mic';
import { MASSAGE_TYPING } from './massage-typing';
import { J_PGPICTURE } from './jpg-picture';
import { DOWNLOAD } from './download';
import { IMPORT } from './import';
import { DOCUMENT } from './document';
import { MASSAGE } from './massage';
import { MAIL } from './mail';
import { LOCATION } from './location';
import { NEXT_MENU } from './next-menu';
import { NOTES } from './notes';
import { NOTIFICATION } from './notification';
import { LIST } from './list';
import { MEMORY_CARD } from './memory-card';
import { LINK } from './link';
import { PREVIOUS_MENU } from './previous-menu';
import { POWER_BUTTON } from './power-button';
import { MUSIC_ICON } from './music-icon';
import { PEN_POINTER } from './pen-pointer';
import { PAPER_PIN } from './paper-pin';
import { SEARCH } from './search';
import { RELOAD } from './reload';
import { REFRESH } from './refresh';
import { SHARE_FILE } from './share-file';
import { SERVICE } from './service';
import { VOLUME } from './volume';
import { ZOOM_OUT } from './zoom-out';
import { ZOOM_IN } from './zoom-in';
import { WIFI } from './wifi';
let icons: AnimatedIconType[] = [
  AVATER,
  BOOKMARK,
  BATTERY_CHARGING,
  CALENDER,
  CART,
  FAST_FORWARD,
  EYE,
  CROP,
  FOLDER,
  FRAME,
  CHAT,
  MIC,
  MASSAGE_TYPING,
  J_PGPICTURE,
  DOWNLOAD,
  IMPORT,
  DOCUMENT,
  MASSAGE,
  MAIL,
  LOCATION,
  NEXT_MENU,
  NOTES,
  NOTIFICATION,
  LIST,
  MEMORY_CARD,
  LINK,
  PREVIOUS_MENU,
  POWER_BUTTON,
  MUSIC_ICON,
  PEN_POINTER,
  PAPER_PIN,
  SEARCH,
  RELOAD,
  REFRESH,
  SHARE_FILE,
  SERVICE,
  VOLUME,
  ZOOM_OUT,
  ZOOM_IN,
  WIFI,
];
export const UserInterfaceCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'User Interface',
    className: 'UserInterface',
    propertyName: 'userInterface',
    constantName: 'USER_INTERFACE',
    fileName: 'user-interface',
  };
  icons = icons.map((_icon) => ({
    ..._icon,
    icon:_icon.icon,
  }));
  return {
    names: names,
    icons: icons.map((icon) => ({ names: icon.names })),
    icon: icons.find((icon) => icon.names.constantName === iconName),
  };
};
