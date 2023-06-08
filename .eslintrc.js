module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'plugin:storybook/recommended'],
	overrides: [{
		extends: ['xo-typescript'],
		files: ['*.ts', '*.tsx'],
	}],
	ignorePatterns: ['test', 'lib'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
};
