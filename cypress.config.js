const { defineConfig } = require("Cypress");
const cucumber = require ("cypress-cucumber-preprocessor").default
const { allureCypress } = require('allure-cypress/reporter')



module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://www.saucedemo.com/v1/',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureCypress(on, {
        resultsDir: "./allure-results",
        });
    return config;      
    },
    env: {
      allureReuseAfterSpec: true
    },
  /*  env: {
      TAGS: '@focus', // Executar apenas cenários com a tag @focus
      TAGS: 'not @ignore' // Ignorar cenários com a tag @ignore
    }*/
  },
});
