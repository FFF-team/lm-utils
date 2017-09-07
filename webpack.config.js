const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  devtool: false,
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),

  },
  module: {
  	rules: [
  		{
  			test: /\.(js|jsx)$/,
        include: [resolveApp('src'), resolveApp('./index.js')],
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        }
  		}
  	]
  }
};