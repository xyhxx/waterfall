const Minicss = require('mini-css-extract-plugin');
// const OptimazeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.scss$/,
            use: [
              { loader: Minicss.loader, options: { publicPath: '../' } },
              'css-loader',
              {
                loader: 'postcss-loader',
                options: { ident: 'postcss', plugins: () => [require('postcss-preset-env')()] },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: 'url-loader',
            options: { limit: 8 * 1024, name: 'img/[name].[ext]', esModule: false },
          },
          {
            include: /src/,
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: { chrome: '60', ie: '9', firefox: '60', edge: '17', safari: '10' },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Minicss({ filename: 'css/[name].css' }),
    //new OptimazeCss(),
  ],
  //optimization: {
  //    splitChunks: {
  //        chunks: 'all',
  //    },
  //},
  externals: {},
  devtool: 'source-map',
  mode: 'development',
};
