const path = require('path');

module.exports = {
	entry: {
		index: [
		'./src/ts/index-menu.ts',
		'./src/ts/social.ts',
		'./src/ts/about-me.ts',
		'./src/ts/slide.ts',
		'./src/ts/navigator.ts',
		],
		experience: [
		'./src/ts/menu.ts',
		'./src/ts/experience.ts',
		'./src/ts/social.ts',
		'./src/ts/slide.ts',
		'./src/ts/navigator.ts'
		],
		about: [
		'./src/ts/about-me.ts',
		'./src/ts/menu.ts',
		'./src/ts/social.ts',
		'./src/ts/slide.ts',
		'./src/ts/navigator.ts'
		],
		projects: [
		'./src/ts/projects.ts',
		'./src/ts/menu.ts',
		'./src/ts/social.ts',
		'./src/ts/slide.ts',
		'./src/ts/navigator.ts'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};