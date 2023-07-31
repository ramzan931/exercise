
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    env:{
      baseUrl: 'https://gorest.co.in/public/v2',
      token: 'Bearer 4cef239b61082cbbeaa3def254ef32cb975b3985dd0841e9d3ffda4128d5f003'

    },
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});