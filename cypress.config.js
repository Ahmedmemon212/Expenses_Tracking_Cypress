const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // Example of setting up a node event listener
      on('before:browser:launch', (browser, launchOptions) => {
        // Modify browser launch options if needed
      });
    },
  },
});
