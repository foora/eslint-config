module.exports = {
    extends: ['./index.js'],
    plugins: ['react'],
    rules: {
        'react/boolean-prop-naming': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/display-name': 'off',
        'react/forbid-component-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'error',
        'react/no-danger': 'off',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-typos': 'error',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'off',
        'react/no-unuesd-state': 'off',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': [
            'error',
            'always'
        ],
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'off',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': 'off',
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: false,
                selfClosing: 'line-aligned'
            }
        ],
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                attributes: {
                    allowMultiline: true
                },
                children: true,
                spacing: {
                    objectLiterals: 'never'
                }
            }
        ],
        'react/jsx-equals-spacing': [
            'error',
            'never'
        ],
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off'
    }
};