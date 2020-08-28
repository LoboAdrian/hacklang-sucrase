let path = require('path')

const plugin = path.join(__dirname, '../../babel/examples/plugin/index.js')

/**
 * @type {import("@types/webpack").Configuration} config
 */
module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /.js$/,
				loader: require.resolve(path.join(__dirname, '../../babel-loader')),
				options: {
					plugins: [plugin],
				},
			},
		],
	},
}
