const { defineConfig } = require("cypress");

// Populate process.env with values from .env file
require("dotenv").config();

module.exports = defineConfig({
  env: {
    googleRefreshToken: process.env.REACT_APP_GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_PW,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
