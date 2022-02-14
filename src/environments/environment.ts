// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // DEV
  // API_URL: 'http://20.97.147.252:9090',
  API_URL: "https://apim-canibalizacion-poc-eastus2-01.azure-api.net",
  ENDPOINT_PERIOD: '/api/Periodo',
  ENDPOINT_SOIRESUME: '/api/ResumenGeneral',
  ENDPOINT_CATEGORIES: '/api/Categorias',
  ENDPOINT_ITEMS: '/api/Articulos',
  // Unit Test
  // API_URL: 'http://localhost:44366',
  //Azure active directory
  clienteId: '106a9363-5976-4a32-8967-50cfa2f769db',
  dirId: 'https://login.microsoftonline.com/66f9ab85-de1a-40d4-b7bb-21565ad57cce',
  redUrl: 'http://localhost:4200',
  // Headers
  Ocp_Apim_Subscription_Key: "52a9cfd90836490ea6cf7bc25f3bf744"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
