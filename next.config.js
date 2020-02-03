const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const withTypescript = require("@zeit/next-typescript");
const fs = require("fs");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const recursiveCopy = require("recursive-copy");
const withImages = require("next-images");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const withAntd = require("./next-antd.config");

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "./assets/less/antd-custom.less"), "utf8"));

// const cssConfig = {
// 	cssLoaderOptions: {
// 		importLoaders: 1,
// 		localIdentName: "[local]___[hash:base64:5]"
// 	}
// };
const lessConfig = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]___[hash:base64:5]"
	},
	LessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: themeVariables // make your antd custom effective
	}
};
const nextConfig = {
	// exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
	//   await recursiveCopy(join(dir, 'src/'), outDir, {dot:true});
	//   return defaultPathMap
	// },
	webpack: config => {
		// if (isServer) {
		// 	const antStyles = /antd\/.*?\/style.*?/;
		// 	const origExternals = [...config.externals];
		// 	config.externals = [
		// 		(context, request, callback) => {
		// 			if (request.match(antStyles)) return callback();
		// 			if (typeof origExternals[0] === "function") {
		// 				origExternals[0](context, request, callback);
		// 			} else {
		// 				callback();
		// 			}
		// 		},
		// 		...(typeof origExternals[0] === "function" ? [] : origExternals)
		// 	];
		// 	config.module.rules.unshift({
		// 		test: antStyles,
		// 		use: "null-loader"
		// 	});

		// 	// config.plugins.push(
		// 	// 	new MiniCssExtractPlugin({
		// 	// 		// Options similar to the same options in webpackOptions.output
		// 	// 		// both options are optional
		// 	// 		filename: "[name].css",
		// 	// 		chunkFilename: "[id].css"
		// 	// 	})
		// 	// );
		// }

		config.plugins.push(
			new FilterWarningsPlugin({
				// ignore ANTD chunk styles [mini-css-extract-plugin] warning
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
			})
		);
		return config;
	}
};

if (typeof require !== "undefined") {
	require.extensions[".less"] = file => {};
}

module.exports = withPlugins([[withImages], [withAntd, lessConfig], nextConfig]);

// module.exports = withTypescript(withLess({
//   lessLoaderOptions: {
//       javascriptEnabled: true,
//   },
//   exportPathMap: () => return {
//     '/': { page: '/' },
//     '/about': { page: '/about' },
//     '/readme.md': { page: '/readme' },
//     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
// },
// }));
