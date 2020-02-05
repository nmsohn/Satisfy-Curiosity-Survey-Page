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
	distDir: "_next",
	webpack: config => {
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
