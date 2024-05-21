import ts from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    ...ts.configs.recommended,
    // Parsing of vue files + adds rules
    ...pluginVue.configs['flat/recommended'],
    // Disable rules in conflict with prettier
    eslintConfigPrettier,
    {
        files: ['**/*.ts', '**/*.vue', 'eslint.config.mjs'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'eol-last': 'error',
            'prefer-arrow-callback': 'error',
            'func-style': ['error', 'expression'],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': 'error',
            'camelcase': 'error',
            'default-case-last': 'error',
            'eqeqeq': 'error',
            'no-var': 'error',
            'yoda': 'error',
            'array-bracket-spacing': 'off',
            'array-element-newline': ['error', 'consistent'],
            'arrow-spacing': ['error', {before: true, after: true}],
            'comma-spacing': ['error', {before: false, after: true}],
            'linebreak-style': ['error', 'unix'],
            'spaced-comment': ['error', 'always'],
            'no-unused-vars': 'off'
        },
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    }
]
