const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/**", "eslint.config.js", "eslint.config.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
  },
];
