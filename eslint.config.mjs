import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    // This replaces .eslintignore
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Your existing rules
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "off", // Keep logs for now since you're testing
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];