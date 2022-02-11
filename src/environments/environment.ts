// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // DEV
  // API_URL: 'http://20.97.147.252:9090',
  API_URL: "https://yza-pwa-api-managment.azure-api.net",
  ENDPOINT_PERIOD: '/api/Periodo',
  ENDPOINT_SOIRESUME: '/api/ResumenGeneral',
  ENDPOINT_CATEGORIES: '/api/Categorias',
  ENDPOINT_ITEMS: '/api/Articulos',
  // Unit Test
  // API_URL: 'http://localhost:44366',
  //Azure active directory
  clienteId: '453a1d5e-4577-443a-9357-5f81292ebaff',
  dirId: 'https://login.microsoftonline.com/19513d13-647c-4aba-be24-9318ebf435b1',
  redUrl: 'http://localhost:4200',
  // Headers
  Ocp_Apim_Subscription_Key: "ed0b3ea3066f414ba4b9f872b824343e"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
