import { CompanyTypes } from "./companies.types";

export interface ServicesDetailTypes {
  logo: string;
  stars: number;
  reviewsCount: number;
  title: string;
  date: string;
  location: string;
  views: number;
  images: Array<string>;
  companyInfo: CompanyTypes;
  services: Array<ServicesDetailItem>;
}

export interface ServicesDetailItem {
  title: string;
  price: number;
}
