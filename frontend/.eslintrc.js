const path = require("path");

const resolve = {
  extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".svg"],
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

module.exports = {
  extends: ["@mate-academy/eslint-config-react-internal"],
  ignorePatterns: [
    "next-env.d.ts",
    "**/*/graphql/generated.ts",
    "**/node_modules/*",
  ],
  rules: {
    // TODO: move to internal config
    "jsx-a11y/label-has-associated-control": "off",
    "react/button-has-type": "off",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [...Object.entries(resolve.alias)],
        extensions: resolve.extensions,
      },
      node: {
        extensions: resolve.extensions,
      },
    },
  },
};
