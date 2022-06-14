// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { aliasItems } = require("./config");
const plugins = require("./plugins");
const rules = require("./rules");
const { arrayFilterEmpty } = require("./utils/helpers");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: arrayFilterEmpty([
      rules.javascriptRule,
      rules.typescriptRule,
      rules.htmlRule,
      rules.imagesRule,
      rules.fontsRule,
      rules.cssRule,
      ...rules.lessRules,
      ...rules.sassRules,
      ...rules.svgRules,
    ]),
  },
  plugins: arrayFilterEmpty([
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.esLintPlugin,
    plugins.copyPlugin,
  ]),
  resolve: {
    alias: aliasItems,
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" })],
};