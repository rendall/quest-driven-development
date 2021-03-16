const path = require("path");
const webpack = require("webpack");
const sveltePreprocess = require("svelte-preprocess")

const preprocess = sveltePreprocess({ typescript: true })
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const mode = process.env.NODE_ENV || "development"
const mode = process.env.NODE_ENV || "production"
const isDevelopmentMode = mode === "development"
const isProductionMode = mode === "production"

module.exports = {
  mode,

  entry: {
    "assets/questBuilder": "./src/docs/assets/questBuilder.ts",
    "assets/visualizer": "./src/docs/assets/visualizer.ts",
    "assets/QDD": "./src/docs/QDD.ts"
  },

  output: {
    path: path.resolve(__dirname, "docs"),
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new HtmlWebpackPlugin({ template: "./src/docs/index.html", filename:"tools/index.html" }),
  ],

  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader-hot",
          options: {
            dev: isDevelopmentMode,
            preprocess,
            // NOTE emitCss: true is currently not supported with HMR
            emitCss: isProductionMode,
            hotReload: !isProductionMode,
            hotOptions: {
              noPreserveState: false,
              noPreserveStateKey: "@!hmr",
              noReload: false,
              optimistic: false,
              acceptAccessors: true,
              acceptNamedExports: true,
            },
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json'))
      // svelte: path.resolve("node_modules", "svelte"),
    },
    mainFields: ["svelte", "browser", "module", "main"],
    extensions: [".mjs", ".js", ".svelte", ".ts"],
  },

  devServer: {
    open: true,
    host: "localhost",
    contentBase: './docs/tools',
  },
};
