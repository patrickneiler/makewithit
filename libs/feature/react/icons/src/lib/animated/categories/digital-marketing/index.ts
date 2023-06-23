import { AnimatedIconType, AnimatedIconCategoryType } from '../../types';
import { ADVERTIESMENT } from './advertiesment';
import { BATCH } from './batch';
import { BASKET } from './basket';
import { BILLBOARD } from './billboard';
import { BILL } from './bill';
import { CHAT } from './chat';
import { MADEL } from './madel';
import { GROWTH } from './growth';
import { GRAPH } from './graph';
import { MARKETING } from './marketing';
import { MESSAGE } from './message';
import { ONLINE_SHOP } from './online-shop';
import { MIC_IN_HAND } from './mic-in-hand';
import { MEDIA_USERS } from './media-users';
import { MIC } from './mic';
import { MESSAGE_SENT } from './message-sent';
import { MOBILE } from './mobile';
import { NEW_CUSTOMER } from './new-customer';
import { PRESENTATION } from './presentation';
import { PERFOMANCE } from './perfomance';
import { PAY_PER_CLICK } from './pay-per-click';
import { PLAN } from './plan';
import { REPORT } from './report';
import { RATING } from './rating';
import { SEARCH } from './search';
import { SHOPING } from './shoping';
import { REVIEW } from './review';
import { SALE } from './sale';
import { SHIELD } from './shield';
import { SHARE } from './share';
import { SOCIAL_MEDIA } from './social-media';
import { THUMBS_UP } from './thumbs-up';
import { VIDEO } from './video';
import { STREAM } from './stream';
import { TROLLEY } from './trolley';
import { VIDEO_MARKETING } from './video-marketing';
import { VISION } from './vision';
import { USER } from './user';
import { TARGET } from './target';
import { WEBSITE } from './website';
let icons: AnimatedIconType[] = [
  ADVERTIESMENT,
  BATCH,
  BASKET,
  BILLBOARD,
  BILL,
  CHAT,
  MADEL,
  GROWTH,
  GRAPH,
  MARKETING,
  MESSAGE,
  ONLINE_SHOP,
  MIC_IN_HAND,
  MEDIA_USERS,
  MIC,
  MESSAGE_SENT,
  MOBILE,
  NEW_CUSTOMER,
  PRESENTATION,
  PERFOMANCE,
  PAY_PER_CLICK,
  PLAN,
  REPORT,
  RATING,
  SEARCH,
  SHOPING,
  REVIEW,
  SALE,
  SHIELD,
  SHARE,
  SOCIAL_MEDIA,
  THUMBS_UP,
  VIDEO,
  STREAM,
  TROLLEY,
  VIDEO_MARKETING,
  VISION,
  USER,
  TARGET,
  WEBSITE,
];
export const DigitalMarketingCategory: AnimatedIconCategoryType = (
  iconName?: string
) => {
  const names = {
    name: 'Digital Marketing',
    className: 'DigitalMarketing',
    propertyName: 'digitalMarketing',
    constantName: 'DIGITAL_MARKETING',
    fileName: 'digital-marketing',
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
