/* eslint-disable no-undef */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transformIgnorePatterns: [],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		// "\\.(css|scss)": "identity-obj-proxy",
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/testMocks/assetsMocks.js",
	},
	testRegex: "^.+\\.(spec|test)\\.(ts|tsx)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
