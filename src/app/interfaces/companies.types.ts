export interface CompaniesItem {
  address: string;
  commercialName: string;
  dateRegistration: string;
  description: string;
  email: string | null;
  id: number;
  isVerified: boolean;
  legalName: string;
  logoUrl: string | null;
  phone: string;
  schedule: string;
  site: string | null;
  taxNumber: string;
}

export enum CompaniesContentTypes {
  LIST = 'list',
  BLOCK = 'block',
}
