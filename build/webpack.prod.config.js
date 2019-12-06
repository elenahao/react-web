const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	plugins: [
		//打包前将dist目录删掉
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../')
		})
	]
}

module.exports = merge(commonConfig, prodConfig)