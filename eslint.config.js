import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	...ts.configs.stylisticTypeChecked,
	prettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		ignores: ['node_modules/', 'build/', 'dist/', '**/.*', 'vitest.config.ts', 'eslint.config.js'],
	},
	{
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
);
