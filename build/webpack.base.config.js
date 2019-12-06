const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/app.jsx'
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		},{
			test: /\.(png|jpe?g|gif)$/i,
			use: {
				loader: 'url-loader',
				options: {
					//小于8192bytes转换成base64，打包在js文件中
					limit: 8192,
					name: '[name]_[hash].[ext]',
					outputPath: 'images/'
				}
			}
		},{
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						//层级引用的时候，仍从底部开始使用loader
						importLoaders: 2,
						//css打包，独立引用样式
						modules: true
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		},{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		},{
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},
	plugins: [
		//htmlwebpackplugin插件会在打包结束后
		//自动生成一个html文件，并将打包生成的js自动引入到这个html文件中
		new HtmlWebpackPlugin({
			//以这个为模板来生成
			template: 'src/index.html'
		})
	],
	optimization: {
		//等同于splitChunks:{} ，默认的内容就是下面的这些
		splitChunks: {
			//只对异步import代码生效，如果想对同步的代码也生效，需要使用chunks:'all',单独的同步代码分割是initial
			chunks: "async",
			//引入的库大于30kb，才进行代码分割，如果小于30kb，就不进行代码分割了
			minSize: 30000,
			//当模块被重复使用多少次的时候进行代码分割
			minChunks: 1,
			//打开一个页面时同时加载的模块数最多是多少个，也就是拆分不是无限制的，不是说引用了多少个类库就拆成多少个，拆的太多也会影响页面打开速度
			maxAsyncRequests: 5,
			//首页入口文件加载的时候，最多可以加载多少个模块
			maxInitialRequests: 3,
			//文件生成的时候，默认的连接符是什么
			automaticNameDelimiter: '~',
			name: true,
			//vendors不是false的时候，针对同步代码的配置
			//是一个缓存组的概念，将所有符合条件的模块，打包到一起，比如先打包了一个lodash，先缓存起来，等打包到jquery的时候，把它们整合成一个文件
			cacheGroups: {
				//去掉vendors~前缀
				// vendors: false,
				vendors: {
					//是否在node_modules库中
					test: /[\\/]node_modules[\\/]/,
					//值越大，优先级越高，比如同时满足vendors和default，那么按照哪个进行打包呢？就根据这个优先级来判断
					priority: -10,
					filename: 'vendors.js'
				},
				//default: false
				//配置了default之后，同步的业务代码会在打包时读取这些配置
				default: {
					minChunks: 2,
					priority: -20,
					//针对a引用了b，b引用了c这种场景，如果c已经被打包过了，那么就复用，不会再打到b包中
					reuseExistingChunk: true,
					//指定文件名
					filename: 'common.js'
				}
			}
		}
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}