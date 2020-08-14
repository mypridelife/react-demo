module.exports = {
  style: {
    postcss: {
      // 这里的选项会传递给 postcss-loader
      plugins: [
        require("postcss-import")({}),
        require("postcss-url")({}),
        require("postcss-aspect-ratio-mini")({}),
        require("postcss-write-svg")({ utf8: false }),

        require("postcss-cssnext")({}),
        require("postcss-px-to-viewport")({
          viewportWidth: 750, // (Number) The width of the viewport.
          viewportHeight: 1334, // (Number) The height of the viewport.
          unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
          viewportUnit: "vw", // (String) Expected units.
          selectorBlackList: [".ignore", ".hairlines", "am"], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
          mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
        }),
        require("postcss-viewport-units")({}),
        require("cssnano")({
          "cssnano-preset-advanced": {
            zindex: false,
            autoprefixer: false,
          },
        }),
      ],
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd-mobile", style: "css" }], // `style: true` 会加载 less 文件
    ],
  },
}
