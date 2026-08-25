import {
  Ship,
  Plane,
  Truck,
  ClipboardList,
  MapPin,
  Building2,
  Landmark,
  Wifi,
  ShieldCheck,
  Wheat,
  HeartPulse,
  Factory,
  Globe2,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export const HEAD_OFFICE_PHONES = ["+962 6 465 4120", "+962 6 465 4150"];
export const HEAD_OFFICE_FAX = "+962 6 465 2230";
export const HEAD_OFFICE_MOBILE = "+962 79 551 3877";
export const HEAD_OFFICE_EMAIL = "info@natourco.com";
export const HEAD_OFFICE_TEL_LINKS = ["tel:+96264654120", "tel:+96264654150"];

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  sea: Ship,
  land: Truck,
  air: Plane,
  transport: Truck,
  consulting: ClipboardList,
};

export const HOME_SERVICE_ICONS: LucideIcon[] = [Plane, Ship, Truck, ClipboardList];
export const HOME_SERVICE_KEYS = ["airFreight", "seaFreight", "landShipping", "customsConsulting"];

export const INCOTERM_KEYS = [
  "exw",
  "fca",
  "cpt",
  "cip",
  "dap",
  "dpu",
  "ddp",
  "fas",
  "fob",
  "cfr",
  "cif",
];

export interface BranchInfo {
  key: string;
  icon: LucideIcon;
  mapQuery: string;
}

export const BRANCHES: BranchInfo[] = [
  { key: "amman", icon: Building2, mapQuery: "Shabsough Building Downtown Amman Jordan" },
  { key: "aqaba", icon: Ship, mapQuery: "Aqaba Customs Jordan" },
  { key: "sahab", icon: Factory, mapQuery: "King Abdullah II Ibn Al Hussein City Sahab Jordan" },
  { key: "airport", icon: Plane, mapQuery: "Queen Alia International Airport Cargo Jordan" },
  { key: "airportFreeZone", icon: Globe2, mapQuery: "Airport Free Zone Amman Jordan" },
];

export interface UsefulLink {
  key: string;
  href: string;
  icon: LucideIcon;
}

export const USEFUL_LINKS: UsefulLink[] = [
  { key: "finance", href: "https://www.mof.gov.jo/", icon: Landmark },
  { key: "trc", href: "https://www.trc.gov.jo/", icon: Wifi },
  { key: "customs", href: "https://www.customs.gov.jo/", icon: ShieldCheck },
  { key: "freezones", href: "https://www.free-zones.gov.jo/", icon: Globe2 },
  { key: "agriculture", href: "https://www.moa.gov.jo/", icon: Wheat },
  { key: "health", href: "https://www.moh.gov.jo/", icon: HeartPulse },
  { key: "aci", href: "https://www.aci.org.jo/", icon: Building2 },
  { key: "jfdz", href: "https://www.jfdz.jo/", icon: Factory },
  { key: "tariff", href: "https://services.customs.gov.jo/JCcits/sections.aspx", icon: ScrollText },
];

export interface FormsCategory {
  key: "categoryNav" | "categoryCustoms";
  pdfHref: string;
  wordHref: string;
}

export const FORMS_CATEGORIES: FormsCategory[] = [
  {
    key: "categoryNav",
    pdfHref: "https://natourco.com/en/%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b7%d9%82-%d8%a7%d9%84%d8%ac%d9%85%d8%b1%d9%83%d9%8a%d8%a9-pdf/",
    wordHref: "https://natourco.com/en/%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b7%d9%82-%d8%a7%d9%84%d8%ac%d9%85%d8%b1%d9%83%d9%8a%d8%a9-word/",
  },
  {
    key: "categoryCustoms",
    pdfHref: "https://natourco.com/en/%d9%86%d9%85%d8%a7%d8%b0%d8%ac-%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%85%d9%84%d8%a7%d8%ad%d8%a9-pdf/",
    wordHref: "https://natourco.com/en/%d9%86%d9%85%d8%a7%d8%b0%d8%ac-%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%85%d9%84%d8%a7%d8%ad%d8%a9-word/",
  },
];

export { MapPin };
