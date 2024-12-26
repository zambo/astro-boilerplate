import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ts.configs.recommended,
  ...eslintPluginJsxA11y.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/sort-attributes": [
        "error",
        { type: "alphabetical", order: "asc", ignoreCase: true },
      ],
    },
  },
];
