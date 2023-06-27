import { Names } from '../types';
import { UserInterfaceCategory } from './user-interface';
import { DigitalMarketingCategory } from './digital-marketing';
import { ArtificialIntelligenceCategory } from './artificial-intelligence';
import { WebDevelopmentCategory } from './web-development';
import { BusinessAndStartupsCategory } from './business-and-startups';
import { FoodAndDrinkCategory } from './food-and-drink';
import { HexagonCategory } from './hexagon';
import { CyberpunkFramesCategory } from './cyberpunk-frames'; /* CategoryImport */
const AnimatedIconCategories = [
  {
    category: UserInterfaceCategory,
    names: {
      name: 'User Interface',
      className: 'UserInterface',
      propertyName: 'userInterface',
      constantName: 'USER_INTERFACE',
      fileName: 'user-interface',
    },
  },
  {
    category: DigitalMarketingCategory,
    names: {
      name: 'Digital Marketing',
      className: 'DigitalMarketing',
      propertyName: 'digitalMarketing',
      constantName: 'DIGITAL_MARKETING',
      fileName: 'digital-marketing',
    },
  },
  {
    category: ArtificialIntelligenceCategory,
    names: {
      name: 'Artificial Intelligence',
      className: 'ArtificialIntelligence',
      propertyName: 'artificialIntelligence',
      constantName: 'ARTIFICIAL_INTELLIGENCE',
      fileName: 'artificial-intelligence',
    },
  },
  {
    category: WebDevelopmentCategory,
    names: {
      name: 'Web Development',
      className: 'WebDevelopment',
      propertyName: 'webDevelopment',
      constantName: 'WEB_DEVELOPMENT',
      fileName: 'web-development',
    },
  },
  {
    category: BusinessAndStartupsCategory,
    names: {
      name: 'Business and Startups',
      className: 'BusinessAndStartups',
      propertyName: 'businessAndStartups',
      constantName: 'BUSINESS_AND_STARTUPS',
      fileName: 'business-and-startups',
    },
  },
  {
    category: FoodAndDrinkCategory,
    names: {
      name: 'Food and Drink',
      className: 'FoodAndDrink',
      propertyName: 'foodAndDrink',
      constantName: 'FOOD_AND_DRINK',
      fileName: 'food-and-drink',
    },
  } /* Categories */
];
export const AnimatedIconCategoryNames: Names[] = [
  {
    name: 'User Interface',
    className: 'UserInterface',
    propertyName: 'userInterface',
    constantName: 'USER_INTERFACE',
    fileName: 'user-interface',
  },
  {
    name: 'Digital Marketing',
    className: 'DigitalMarketing',
    propertyName: 'digitalMarketing',
    constantName: 'DIGITAL_MARKETING',
    fileName: 'digital-marketing',
  },
  {
    name: 'Artificial Intelligence',
    className: 'ArtificialIntelligence',
    propertyName: 'artificialIntelligence',
    constantName: 'ARTIFICIAL_INTELLIGENCE',
    fileName: 'artificial-intelligence',
  },
  {
    name: 'Web Development',
    className: 'WebDevelopment',
    propertyName: 'webDevelopment',
    constantName: 'WEB_DEVELOPMENT',
    fileName: 'web-development',
  },
  {
    name: 'Business and Startups',
    className: 'BusinessAndStartups',
    propertyName: 'businessAndStartups',
    constantName: 'BUSINESS_AND_STARTUPS',
    fileName: 'business-and-startups',
  },
  {
    name: 'Food and Drink',
    className: 'FoodAndDrink',
    propertyName: 'foodAndDrink',
    constantName: 'FOOD_AND_DRINK',
    fileName: 'food-and-drink',
  } /* CategoryNames */
];
export const AnimatedIconCategorySlugs = AnimatedIconCategoryNames.map(
  (categoryNames) => ({
    slug: categoryNames.fileName,
  })
);

export const AnimatedIconCategory = (categoryName: string) => {
  return AnimatedIconCategories.find(
    (category) => category.names.fileName === categoryName
  );
};
export const AnimatedIcon = (categoryName: string, iconName: string) => {
  const category = AnimatedIconCategory(categoryName);
  const icon = category && category.category(iconName);
  return icon;
};
