module.exports = {
	"preset": "react-native",
	"collectCoverage": true,
	"moduleDirectories": [
		"node_modules",
		"src"
	],
	"transform": {
		"^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
	},
	"transformIgnorePatterns": [
		"node_modules/(?!(jest-)?react-native)"
	],
	"coveragePathIgnorePatterns": [
		"/node_modules/",
		"/jest"
	],
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.js",
	  }
}