module.exports = {
  // other ESLint configurations...

  overrides: [
    {
      files: ["**/*.js"],
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],
};
