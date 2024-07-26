import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";
import pluginJs from "@eslint/js";
import pluginPromise from "eslint-plugin-promise";

export default [
  pluginJs.configs.recommended,

  pluginPromise.configs["flat/recommended"],

  // prettier should be last
  prettierRecommendedConfig,
];
