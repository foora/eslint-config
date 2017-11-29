module.exports = {
    extends: ['./index.js'],
    parser: 'typescript-eslint-parser',
    plugins: ['typescript'],
    rules: {
        'no-undef': 'off',
        'spaced-comment': 'off',
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/explicit-member-accessibility': 'off',
        'typescript/interface-name-prefix': 'off',
        'typescript/member-delimiter-style': 'error',
        'typescript/menber-naming': 'off',
        'typescript/member-ordering': 'error',
        'typescript/no-angle-bracket-type-assertion': 'off',
        'typescript/no-array-constructor': 'error',
        'typescript/no-empty-interface': 'off',
        'typescript/no-explicit-any': 'off',
        'typescript/no-namespace': 'error',
        'typescript/no-parameter-properties': 'off',
        'typescript/no-triple-slash-reference': 'off',
        'typescript/no-type-alias': 'off',
        'typescript/no-unused-vars': 'error',
        'typescript/no-use-before-define': 'off',
        'typescript/prefer-namespace-keyword': 'off',
        'typescript/type-annotation-spacing': 'error'
    }
};