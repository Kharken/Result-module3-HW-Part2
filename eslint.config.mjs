import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig, globalIgnores} from "eslint/config";
import eslintPluginPrettier from 'eslint-plugin-prettier';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
    eslintPluginPrettier,
  {extends: [
      "prettier"
    ]},
  tseslint.configs.recommended,
  globalIgnores(["**/dist", "**/node_modules/", "**/*.config.*"])
]);
