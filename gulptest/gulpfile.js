const {src, dest} = require("gulp");
const SRC = {
	JS: "src/js/*.js",
	CSS: "src/css/*.css",
};
const DEST = {
	JS: "public/js",
	CSS: "public/css",
};
function cc() {
	return src(SRC.JS)
		.pipe(dest(DEST.JS));
}

exports.default = cc;
