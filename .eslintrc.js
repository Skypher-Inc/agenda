module.exports = {
	root: true,
	extends: ['@hokify'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			'args': 'all',
			'argsIgnorePattern': '^_',
			'varsIgnorePattern': '^_',
			'caughtErrorsIgnorePattern': '^_'
		}]
	},
	parserOptions: {
	},
  overrides: [
    {
      files: ['*.test.ts'],
      env: {
        mocha: true
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        'import/no-relative-packages': 'off'
      }
    }
  ]
};
