export interface NavItem {
  labelKey: string;
  href: string;
  children?: { labelKey: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  {
    labelKey: "nav.about",
    href: "/about",
    children: [
      { labelKey: "nav.companyProfile", href: "/about#profile" },
      { labelKey: "nav.gmSpeech", href: "/about#gm" },
    ],
  },
  { labelKey: "nav.services", href: "/services" },
  { labelKey: "nav.forms", href: "/forms" },
  { labelKey: "nav.links", href: "/links" },
  { labelKey: "nav.commercialTerms", href: "/terms" },
  { labelKey: "nav.contact", href: "/contact" },
];
