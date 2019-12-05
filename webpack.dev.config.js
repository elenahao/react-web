const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config');

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		hotOnly: true
	},
	plugins: [
		//hmr热更新，修改样式可以直接显示在页面中而不进行整页刷新，需要配合hot:true和hotOnly：true
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true
	}
}

module.exports = merge(commonConfig, devConfig)