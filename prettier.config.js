module.exports = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: 'always',
	overrides: [
		{
			files: '.editorconfig',
			options: {
				parser: 'yaml',
			},
		},
		{
			files: 'LICENSE',
			options: {
				parser: 'markdown',
			},
		},
	],
};
