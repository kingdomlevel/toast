module.exports = {
    plugins: ['import'],
    parser: '@typescript-eslint/parser', //specifies lint parser
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', 
        'prettier/@typescript-eslint',
        'plugin:prettier/recommneded',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        'react/react-in-jsx-scope' : 'off',
        'react/prop-types' : 'off',
        '@typescript-eslint/explicit-function-return-type' : ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        'import/newline-after-import': ['error', { count: 1}],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type' : 'off',
            },
        },
    ],
};