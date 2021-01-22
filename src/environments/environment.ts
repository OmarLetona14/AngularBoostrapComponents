// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseCountriesUrl: 'https://restcountries.eu/rest/v2',
  baseCurrencyUrl: `https://free.currconv.com/api/v7/`,
  baseCovidUrl: 'https://corona-api.com',
  firebaseConfig: {
    apiKey: "AIzaSyD-RHZ5g1iC1663MCZ_2BgMPZ8sdiPFUpo",
    authDomain: "proyecto-nuevo-3d5cf.firebaseapp.com",
    databaseURL: "https://proyecto-nuevo-3d5cf.firebaseio.com",
    projectId: "proyecto-nuevo-3d5cf",
    storageBucket: "proyecto-nuevo-3d5cf.appspot.com",
    messagingSenderId: "411651575929",
    appId: "1:411651575929:web:bbaf13f835803750b584a8",
    measurementId: "G-FBXW1XG7YQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
