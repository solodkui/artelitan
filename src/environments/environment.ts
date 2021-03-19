import { environmentCommon } from "./environment.common";

export const environment = {
  ...environmentCommon,
  production: false,
  host: 'http://localhost:8080',
};
