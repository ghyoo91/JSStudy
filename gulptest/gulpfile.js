const {src, dest} = require("gulp");
const SRC = {
	JS: "src/*.js",
	CSS: "src/*.css",
};
const DEST = {
	JS: "public",
	CSS: "public",
};
function cc() {
	return src(SRC.JS)
		.pipe(dest(DEST.JS));
}

exports.default = cc;
