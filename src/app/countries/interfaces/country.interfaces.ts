export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  EUR?: All;
  CHF?: All;
  BGN?: All;
  DKK?: All;
  FOK?: All;
  GBP?: All;
  MDL?: All;
  PLN?: All;
  ISK?: All;
  CZK?: All;
  BYN?: All;
  BAM?: BAM;
  IMP?: All;
  UAH?: All;
  ALL?: All;
  MKD?: All;
  RSD?: All;
  RUB?: All;
  GGP?: All;
  RON?: All;
  JEP?: All;
  HUF?: All;
  NOK?: All;
  SEK?: All;
  GIP?: All;
}

export interface All {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  eng?: string;
  gle?: string;
  ell?: string;
  tur?: string;
  spa?: string;
  deu?: string;
  bul?: string;
  dan?: string;
  fao?: string;
  ron?: string;
  lit?: string;
  pol?: string;
  fra?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  swe?: string;
  isl?: string;
  lat?: string;
  ces?: string;
  slk?: string;
  bel?: string;
  rus?: string;
  nld?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  glv?: string;
  ukr?: string;
  por?: string;
  est?: string;
  sqi?: string;
  fin?: string;
  mkd?: string;
  mlt?: string;
  lav?: string;
  nfr?: string;
  slv?: string;
  nrf?: string;
  cnr?: string;
  cat?: string;
  de?: string;
  hun?: string;
  nor?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  ltz?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}
