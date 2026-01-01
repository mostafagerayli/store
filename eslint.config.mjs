import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  ...nextVitals,

  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-var": "error",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
