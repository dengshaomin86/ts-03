const path = require("path");
// html 生成插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: "./src/app.ts",
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的文件名
    filename: "bundle.js",
  },
  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定规则生效的文件
        test: /\.ts$/,
        use: "ts-loader",
        // 指定要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  // 配置 webpack 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "demo-webpack", // 设置 webpack 生成的 html 的标题
      template: "./public/demo.html", // 引用网页模板，不定义会生成一个空白 html
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"], // 表示以 ts、js 结尾的文件可以作为模块引用
  },
};
