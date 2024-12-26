import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import ts from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  eslint.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.astro"],
    rules: {
      ...prettier.rules,
      "astro/no-set-html-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/sort-attributes": [
        "error",
        { type: "alphabetical", order: "asc", ignoreCase: true },
      ],
    },
  },
  {
    files: ["src/**/*.ts", "src/**/*.astro"],
  },
];
