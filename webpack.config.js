const path = require(`path`);

module.exports = {
    mode: `development`,

    watch: true,
    entry: `./src/index.js`,

    output: {

        filename: `bundle.js`,
        path: path.join(
            __dirname, `./public`)
    },
    devtool: `source-map`,
    

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: `babel-loader`,
              },
            },
          ],
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        compress: false,
        open: true,
        port: 1337,
        historyApiFallback: true,

    }
};