const autoprefixer = require("autoprefixer");

module.exports = {
	plugins: [
		autoprefixer({
			browsers: [">= 0.5%", "ie >= 11"]
		})
	]
};
