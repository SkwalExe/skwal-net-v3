import ts from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'


export default withNuxt(
    ...ts.configs.recommended,
    // Parsing of vue files + adds rules
    ...pluginVue.configs['flat/recommended'],
    // Disable rules in conflict with prettier
    eslintConfigPrettier,
    {
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
            'no-unused-vars': 'off',
            'vue/no-multiple-template-root': 'off'
        },
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    }
)
