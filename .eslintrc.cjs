module.exports = {
  root: true,
  extends: ["@crometrics/eslint-config-crometrics-typescript"],
  globals: {
    VERSION: true,
    SHARED: true,
    PAGE: true,
    VARIATION: true,
    PJS: true,
    TAG: true,
    hj: true,
    $: true,
    extension: true,
    optimizely: true,
  },
  rules: {
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-dom-node-append": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  overrides: [
    {
      files: ["project.ts"],
      rules: {
        "sonarjs/no-all-duplicated-branches": "off",
      },
    },
    {
      files: ["*.module.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "error",
      },
    },
  ],
};
