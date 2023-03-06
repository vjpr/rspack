/** @type {import("../../../../dist").Configuration} */
module.exports = {
	output: {
		libraryTarget: "umd",
		library: {
			root: "testLibrary",
			amd: "test-library",
			commonjs: "test-library"
		}
	},
	externals: "module"
};
