// Interfaces for Pages
interface HomePage {
  type: 'Home';
  content: {
    Header: Header;
    FeatureList: Feature[];
    BrandList: BrandItem[];
    ContactUs: ContactUsPage;
  };
}

interface AboutUsPage {
  type: 'AboutUs';
  content: {
    Header: Header;
    Hero: Hero;
    FundingList: Funding[];
    TeamList: TeamMember[];
  };
}

interface CareersPage {
  type: 'Careers';
  content: {
    Header: Header;
    Hero: Hero;
    Body: string;
    OpenPositions: {
      title: string;
      iframe: string;
    }[];
  };
}

interface BlogPage {
  type: 'Blog';
  content: {
    // Define properties for the Blog page here
  };
}

interface ContactUsPage {
  type: 'ContactUs';
  content: {
    Header: Header;
    Hero: Hero;
    ContactUs: ContactUsForm;
  };
}

// Interfaces for Components
interface Header {
  type: 'Header';
  content: {
    Logo: Logo;
    Menu: {
      type: 'Menu';
      content: {
        MenuItems: MenuItem[];
        CTAButton: CTAButton;
      };
    };
  };
}

interface Logo {
  type: 'Logo';
  content: string;
}

interface MenuItem {
  type: 'MenuItem';
  content: {
    label: string;
    link: string;
  };
}

interface CTAButton {
  type: 'CTAButton';
  content: string;
}

interface Hero {
  type: 'Hero';
  content: {
    Title: string;
    Subtitle: string;
    Background: string;
  };
}

interface Feature {
  type: 'Feature';
  content: {
    Title: string;
    Body: string;
    CTAButton: CTAButton;
  };
}

interface TeamMember {
  type: 'TeamMember';
  content: {
    Photo: string;
    Name: string;
    Bio: string;
  };
}

interface BrandItem {
  type: 'BrandItem';
  content: {
    Photo: string;
  };
}

interface Funding {
  type: 'Funding';
  content: {
    list: string[];
  };
}

interface ContactUsForm {
  type: 'ContactUsForm';
  content: {
    FirstName: string;
    LastName: string;
    Email: string;
    Message: string;
  };
}

// Export all the interfaces
export type Page =
  | HomePage
  | AboutUsPage
  | CareersPage
  | BlogPage
  | ContactUsPage;
export type Component =
  | Header
  | Logo
  | MenuItem
  | CTAButton
  | Hero
  | Feature
  | TeamMember
  | BrandItem
  | Funding
  | ContactUsForm;
