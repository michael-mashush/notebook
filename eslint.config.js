import globals                    from 'globals';
import ESLintJavaScript           from '@eslint/js';
import ESLintTypeScript           from 'typescript-eslint'
import ESLintPlugonImportNewLines from 'eslint-plugin-import-newlines'
import ESLintPluginAlignImport    from 'eslint-plugin-align-import'
import ESLintPluginFSDImport      from 'eslint-plugin-fsd-import'
import ESLintPluginReact          from 'eslint-plugin-react'
import ESLintPluginReactHooks     from 'eslint-plugin-react-hooks'
import ESLintPluginReactRefresh   from 'eslint-plugin-react-refresh'
import ESLintStylisticJavaScript  from '@stylistic/eslint-plugin-js'
import ESLintStylisticTypeScript  from '@stylistic/eslint-plugin-ts'
import ESLintStylisticJSX         from '@stylistic/eslint-plugin-jsx'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default ESLintTypeScript.config(
      
  ESLintJavaScript.configs.recommended,
  ...ESLintTypeScript.configs.recommended,

  // personal
  {
    
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: {
        ...ESLintTypeScript.parser
      },
    },

    plugins: {
      'typescript':      ESLintTypeScript,
      'import-newlines': ESLintPlugonImportNewLines,
      'align-import':    ESLintPluginAlignImport,
      'fsd-import':      ESLintPluginFSDImport,
      'react':           ESLintPluginReact,
      'react-hooks':     ESLintPluginReactHooks,
      'react-refresh':   ESLintPluginReactRefresh,
      '@stylistic/js':   ESLintStylisticJavaScript,
      '@stylistic/ts':   ESLintStylisticTypeScript,
      '@stylistic/jsx':  ESLintStylisticJSX
    }, 

    ignores: [
      'node_modules',
      '.fttemplates',
      '.vscode',
      'public',
      'build',
      'dist',
      'eslint.config.js',
      'stylelint.config.js'
    ],

    files: [
      '**/*.{js,jsx,ts,tsx}'
    ],

    rules: {

      // https://eslint.org/docs/latest/rules/array-callback-return
      'array-callback-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/constructor-super
      'constructor-super': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/for-direction
      'for-direction': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/getter-return
      'getter-return': [
        'error',
        {
          allowImplicit: true
        }
      ],

      // https://eslint.org/docs/latest/rules/no-async-promise-executor
      'no-async-promise-executor': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-await-in-loop
      'no-await-in-loop': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-class-assign
      'no-class-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-compare-neg-zero
      'no-compare-neg-zero': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-cond-assign
      'no-cond-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-const-assign
      'no-const-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-constant-binary-expression
      'no-constant-binary-expression': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-constant-condition
      'no-constant-condition': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-constructor-return
      'no-constructor-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-control-regex
      'no-control-regex': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-debugger
      'no-debugger': [
        'warn'
      ],

      // https://eslint.org/docs/latest/rules/no-dupe-args
      'no-dupe-args': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-dupe-class-members
      'no-dupe-class-members': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-dupe-else-if
      'no-dupe-else-if': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-dupe-keys
      'no-dupe-keys': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-duplicate-case
      'no-duplicate-case': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-duplicate-imports
      'no-duplicate-imports': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-empty-character-class
      'no-empty-character-class': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-empty-pattern
      'no-empty-pattern': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-ex-assign
      'no-ex-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-fallthrough
      'no-fallthrough': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-func-assign
      'no-func-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-import-assign
      'no-import-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-inner-declarations
      'no-inner-declarations': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-invalid-regexp
      'no-invalid-regexp': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-irregular-whitespace
      'no-irregular-whitespace': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-loss-of-precision
      'no-loss-of-precision': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-misleading-character-class
      'no-misleading-character-class': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
      'no-new-native-nonconstructor': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-obj-calls
      'no-obj-calls': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-promise-executor-return
      'no-promise-executor-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-prototype-builtins
      'no-prototype-builtins': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-self-assign
      'no-self-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-self-compare
      'no-self-compare': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-setter-return
      'no-setter-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-sparse-arrays
      'no-sparse-arrays': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-template-curly-in-string
      'no-template-curly-in-string': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-this-before-super
      'no-this-before-super': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-undef
      'no-undef': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-unexpected-multiline
      'no-unexpected-multiline': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
      'no-unmodified-loop-condition': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unreachable
      'no-unreachable': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unreachable-loop
      'no-unreachable-loop': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unsafe-finally
      'no-unsafe-finally': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unsafe-negation
      'no-unsafe-negation': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
      'no-unsafe-optional-chaining': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unused-private-class-members
      'no-unused-private-class-members': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unused-vars
      'no-unused-vars': [
        'off'
      ],

      // https://typescript-eslint.io/rules/no-unused-vars
      '@typescript-eslint/no-unused-vars': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-use-before-define
      'no-use-before-define': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-assignment
      'no-useless-assignment': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-backreference
      'no-useless-backreference': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/require-atomic-updates
      'require-atomic-updates': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/use-isnan
      'use-isnan': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/valid-typeof
      'valid-typeof': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/accessor-pairs
      'accessor-pairs': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/arrow-body-style
      'arrow-body-style': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/block-scoped-var
      'block-scoped-var': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/camelcase
      'camelcase': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/capitalized-comments
      'capitalized-comments': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/class-methods-use-this
      'class-methods-use-this': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/complexity
      'complexity': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/consistent-return
      'consistent-return': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/consistent-this
      'consistent-this': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/curly
      'curly': [
        'error',
        'multi-line'
      ],

      // https://eslint.org/docs/latest/rules/default-case
      'default-case': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/default-case-last
      'default-case-last': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/default-param-last
      'default-param-last': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/dot-notation
      'dot-notation': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/eqeqeq
      'eqeqeq': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/func-name-matching
      'func-name-matching': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/func-names
      'func-names': [
        'error',
        'as-needed'
      ],

      // https://eslint.org/docs/latest/rules/func-style
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true
        }
      ],

      // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
      'grouped-accessor-pairs': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/guard-for-in
      'guard-for-in': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/id-denylist
      'id-denylist': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/id-length
      'id-length': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/id-match
      'id-match': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/init-declarations
      'init-declarations': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/logical-assignment-operators
      'logical-assignment-operators': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/max-classes-per-file
      'max-classes-per-file': [
        'error',
        {
          max:               1,
          ignoreExpressions: true
        }
      ],

      // https://eslint.org/docs/latest/rules/max-depth
      'max-depth': [
        'error',
        {
          max: 5
        }
      ],

      // https://eslint.org/docs/latest/rules/max-lines
      'max-lines': [
        'error',
        {
          max:            300,
          skipBlankLines: true,
          skipComments:   true
        }
      ],

      // https://eslint.org/docs/latest/rules/max-lines-per-function
      'max-lines-per-function': [
        'error',
        {
          max:            500,
          skipBlankLines: true,
          skipComments:   true
        }
      ],

      // https://eslint.org/docs/latest/rules/max-nested-callbacks
      'max-nested-callbacks': [
        'error',
        {
          max: 10
        }
      ],

      // https://eslint.org/docs/latest/rules/max-params
      'max-params': [
        'error',
        {
          max: 5
        }
      ],

      // https://eslint.org/docs/latest/rules/max-statements
      'max-statements': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/new-cap
      'new-cap': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-alert
      'no-alert': [
        'warn'
      ],

      // https://eslint.org/docs/latest/rules/no-array-constructor
      'no-array-constructor': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-bitwise
      'no-bitwise': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-caller
      'no-caller': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-case-declarations
      'no-case-declarations': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-console
      'no-console': [
        'warn'
      ],

      // https://eslint.org/docs/latest/rules/no-continue
      'no-continue': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-delete-var
      'no-delete-var': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-div-regex
      'no-div-regex': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-else-return
      'no-else-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-empty
      'no-empty': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-empty-function
      'no-empty-function': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-empty-static-block
      'no-empty-static-block': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-eq-null
      'no-eq-null': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-eval
      'no-eval': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-extend-native
      'no-extend-native': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-extra-bind
      'no-extra-bind': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
      'no-extra-boolean-cast': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-extra-label
      'no-extra-label': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-global-assign
      'no-global-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-implicit-coercion
      'no-implicit-coercion': [
        'error',
        {
          boolean: false
        }
      ],

      // https://eslint.org/docs/latest/rules/no-implicit-globals
      'no-implicit-globals': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-implied-eval
      'no-implied-eval': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-inline-comments
      'no-inline-comments': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-invalid-this
      'no-invalid-this': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-iterator
      'no-iterator': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-label-var
      'no-label-var': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-labels
      'no-labels': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-lone-blocks
      'no-lone-blocks': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-lonely-if
      'no-lonely-if': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-loop-func
      'no-loop-func': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-magic-numbers
      'no-magic-numbers': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-multi-assign
      'no-multi-assign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-multi-str
      'no-multi-str': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-negated-condition
      'no-negated-condition': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-nested-ternary
      'no-nested-ternary': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-new
      'no-new': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-new-func
      'no-new-func': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-new-wrappers
      'no-new-wrappers': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
      'no-nonoctal-decimal-escape': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-object-constructor
      'no-object-constructor': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-octal
      'no-octal': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-octal-escape
      'no-octal-escape': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-param-reassign
      'no-param-reassign': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-plusplus
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],

      // https://eslint.org/docs/latest/rules/no-proto
      'no-proto': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-redeclare
      'no-redeclare': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-regex-spaces
      'no-regex-spaces': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-restricted-exports
      'no-restricted-exports': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-restricted-globals
      'no-restricted-globals': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-restricted-imports
      'no-restricted-imports': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-restricted-properties
      'no-restricted-properties': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-restricted-syntax
      'no-restricted-syntax': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-return-assign
      'no-return-assign': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-script-url
      'no-script-url': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-sequences
      'no-sequences': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-shadow
      'no-shadow': [
        'off'
      ],

      // https://typescript-eslint.io/rules/no-shadow
      '@typescript-eslint/no-shadow': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
      'no-shadow-restricted-names': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-ternary
      'no-ternary': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-throw-literal
      'no-throw-literal': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-undef-init
      'no-undef-init': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-undefined
      'no-undefined': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-underscore-dangle
      'no-underscore-dangle': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-unneeded-ternary
      'no-unneeded-ternary': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-unused-expressions
      'no-unused-expressions': [
        'error',
        {
          allowTernary: true
        }
      ],

      // https://eslint.org/docs/latest/rules/no-unused-labels
      'no-unused-labels': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-call
      'no-useless-call': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-catch
      'no-useless-catch': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-computed-key
      'no-useless-computed-key': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-concat
      'no-useless-concat': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-constructor
      'no-useless-constructor': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-escape
      'no-useless-escape': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-rename
      'no-useless-rename': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-useless-return
      'no-useless-return': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-var
      'no-var': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-void
      'no-void': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/no-warning-comments
      'no-warning-comments': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/no-with
      'no-with': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/object-shorthand
      'object-shorthand': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/one-var
      'one-var': [
        'error',
        'never'
      ],

      // https://eslint.org/docs/latest/rules/operator-assignment
      'operator-assignment': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      'prefer-arrow-callback': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-const
      'prefer-const': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-destructuring
      'prefer-destructuring': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
      'prefer-exponentiation-operator': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-named-capture-group
      'prefer-named-capture-group': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/prefer-numeric-literals
      'prefer-numeric-literals': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-object-has-own
      'prefer-object-has-own': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-object-spread
      'prefer-object-spread': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
      'prefer-promise-reject-errors': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-regex-literals
      'prefer-regex-literals': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-rest-params
      'prefer-rest-params': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-spread
      'prefer-spread': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/prefer-template
      'prefer-template': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/radix
      'radix': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/require-await
      'require-await': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/require-unicode-regexp
      'require-unicode-regexp': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/require-yield
      'require-yield': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/sort-imports
      'sort-imports': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/sort-keys
      'sort-keys': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/sort-vars
      'sort-vars': [
        'off'
      ],

      // https://eslint.org/docs/latest/rules/strict
      'strict': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/symbol-description
      'symbol-description': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/vars-on-top
      'vars-on-top': [
        'error'
      ],

      // https://eslint.org/docs/latest/rules/yoda
      'yoda': [
        'error',
        'never',
        {
          exceptRange: true
        }
      ],

      // ==================================================

      // https://github.com/SeinopSys/eslint-plugin-import-newlines
      'import-newlines/enforce': [
        'error',
        {
          items:           1,
          forceSingleLine: false
        }
      ],
      
      // ==================================================

      // https://github.com/simonwep/eslint-plugin-align-import/blob/master/docs/rules/align-import.md
      'align-import/align-import': [
        'error'
      ],

      // https://github.com/simonwep/eslint-plugin-align-import/blob/master/docs/rules/trim-import.md
      'align-import/trim-import': [
        'error'
      ],

      // ==================================================

      // https://github.com/vgratsilev/eslint-plugin-fsd-import/blob/main/docs/rules/fsd-relative-path.md
      'fsd-import/fsd-relative-path': [
        'off'
      ],

      // https://github.com/vgratsilev/eslint-plugin-fsd-import/blob/main/docs/rules/public-api-imports.md
      'fsd-import/public-api-imports': [
        'off'
      ],

      // https://github.com/vgratsilev/eslint-plugin-fsd-import/blob/main/docs/rules/layer-imports.md
      'fsd-import/layer-imports': [
        'error'
      ],
      
      // ==================================================

      // https://eslint.style/rules/js/array-bracket-newline
      '@stylistic/js/array-bracket-newline': [
        'error',
        'consistent'
      ],

      // https://eslint.style/rules/js/array-bracket-spacing
      '@stylistic/js/array-bracket-spacing': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/array-element-newline
      '@stylistic/js/array-element-newline': [
        'error',
        'consistent'
      ],

      // https://eslint.style/rules/js/arrow-parens
      '@stylistic/js/arrow-parens': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/arrow-spacing
      '@stylistic/js/arrow-spacing': [
        'error',
        {
          before: true,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/block-spacing
      '@stylistic/js/block-spacing': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/brace-style
      '@stylistic/js/brace-style': [
        'error',
        '1tbs'
      ],

      // https://eslint.style/rules/js/comma-dangle
      '@stylistic/js/comma-dangle': [
        'error',
        {
          arrays:    'never',
          objects:   'never',
          imports:   'never',
          exports:   'never',
          functions: 'never'
        }
      ],

      // https://eslint.style/rules/js/comma-spacing
      '@stylistic/js/comma-spacing': [
        'error',
        {
          before: false,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/comma-style
      '@stylistic/js/comma-style': [
        'error',
        'last'
      ],

      // https://eslint.style/rules/js/computed-property-spacing
      '@stylistic/js/computed-property-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/dot-location
      '@stylistic/js/dot-location': [
        'error',
        'property'
      ],

      // https://eslint.style/rules/js/eol-last
      '@stylistic/js/eol-last': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/function-call-argument-newline
      '@stylistic/js/function-call-argument-newline': [
        'error',
        'consistent'
      ],

      // https://eslint.style/rules/js/function-call-spacing
      '@stylistic/js/function-call-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/function-paren-newline
      '@stylistic/js/function-paren-newline': [
        'error',
        'multiline'
      ],

      // https://eslint.style/rules/js/generator-star-spacing
      '@stylistic/js/generator-star-spacing': [
        'error',
        {
          before: false,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/implicit-arrow-linebreak
      '@stylistic/js/implicit-arrow-linebreak': [
        'error',
        'beside'
      ],

      // https://eslint.style/rules/js/indent
      '@stylistic/js/indent': [
        'error',
        2,
        {
          VariableDeclarator:       'first',
          SwitchCase:               1,
          outerIIFEBody:            1,
          MemberExpression:         1,
          ArrayExpression:          1,
          ObjectExpression:         1,
          ImportDeclaration:        1,
          flatTernaryExpressions:   false,
          offsetTernaryExpressions: true,
          ignoreComments:           false,
          FunctionDeclaration: {
            body:       1,
            parameters: 1
          },
          FunctionExpression: {
            body:       1,
            parameters: 1
          },
          StaticBlock: {
            body: 1
          },
          CallExpression: {
            arguments: 1
          }
        }
      ],

      // https://eslint.style/rules/js/jsx-quotes
      '@stylistic/js/jsx-quotes': [
        'error',
        'prefer-double'
      ],

      // https://eslint.style/rules/js/key-spacing
      '@stylistic/js/key-spacing': [
        'error',
        {
          singleLine: {
            beforeColon: false,
            afterColon:  true,
          },
          multiLine: {
            beforeColon: false,
            afterColon:  true,
            align:       'value',
          }
        }
      ],

      // https://eslint.style/rules/js/keyword-spacing
      '@stylistic/js/keyword-spacing': [
        'error',
        {
          before: true,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/line-comment-position
      '@stylistic/js/line-comment-position': [
        'error',
        'above'
      ],

      // https://eslint.style/rules/js/linebreak-style
      '@stylistic/js/linebreak-style': [
        'off'
      ],

      // https://eslint.style/rules/js/lines-around-comment
      '@stylistic/js/lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment:  false,
          beforeLineComment:  false,
          afterLineComment:   false,
          allowBlockStart:    true,
          allowBlockEnd:      true,
          allowObjectStart:   true,
          allowObjectEnd:     true,
          allowArrayStart:    true,
          allowArrayEnd:      true,
          allowClassStart:    true,
          allowClassEnd:      true
        }
      ],

      // https://eslint.style/rules/js/lines-between-class-members
      '@stylistic/js/lines-between-class-members': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/max-len
      '@stylistic/js/max-len': [
        'error',
        {
          code:     160,
          comments: 70,
          tabWidth: 4,
        }
      ],

      // https://eslint.style/rules/js/max-statements-per-line
      '@stylistic/js/max-statements-per-line': [
        'error',
        {
          max: 2
        }
      ],

      // https://eslint.style/rules/js/multiline-comment-style
      '@stylistic/js/multiline-comment-style': [
        'error',
        'bare-block'
      ],

      // https://eslint.style/rules/js/multiline-ternary
      '@stylistic/js/multiline-ternary': [
        'error',
        'always-multiline'
      ],

      // https://eslint.style/rules/js/new-parens
      '@stylistic/js/new-parens': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/newline-per-chained-call
      '@stylistic/js/newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 4
        }
      ],

      // https://eslint.style/rules/js/no-confusing-arrow
      '@stylistic/js/no-confusing-arrow': [
        'off',
      ],

      // https://eslint.style/rules/js/no-extra-parens
      '@stylistic/js/no-extra-parens': [
        'error',
        'all',
        {
          conditionalAssign:                  false,
          returnAssign:                       false,
          nestedBinaryExpressions:            false,
          ternaryOperandBinaryExpressions:    false,
          enforceForArrowConditionals:        false,
          enforceForSequenceExpressions:      false,
          enforceForNewInMemberExpressions:   false,
          enforceForFunctionPrototypeMethods: false,
          ignoreJSX:                          'all'
        }
      ],

      // https://eslint.style/rules/js/no-extra-semi
      '@stylistic/js/no-extra-semi': [
        'error'
      ],

      // https://eslint.style/rules/js/no-floating-decimal
      '@stylistic/js/no-floating-decimal': [
        'error'
      ],

      // https://eslint.style/rules/js/no-mixed-operators
      '@stylistic/js/no-mixed-operators': [
        'error'
      ],

      // https://eslint.style/rules/js/no-mixed-spaces-and-tabs
      '@stylistic/js/no-mixed-spaces-and-tabs': [
        'error',
        'smart-tabs'
      ],

      // ! conflict with "@stylistic/ts/key-spacing" rule
      // https://eslint.style/rules/js/no-multi-spaces
      '@stylistic/js/no-multi-spaces': [
        'off',
        {
          exceptions: {
            Property:           true,
            VariableDeclarator: true,
            ImportDeclaration:  true
          }
        }
      ],

      // https://eslint.style/rules/js/no-multiple-empty-lines
      '@stylistic/js/no-multiple-empty-lines': [
        'error',
        {
          max:    3,
          maxEOF: 0,
          maxBOF: 0
        }
      ],

      // https://eslint.style/rules/js/no-tabs
      '@stylistic/js/no-tabs': [
        'error', 
        { 
          allowIndentationTabs: false 
        }
      ],

      // https://eslint.style/rules/js/no-trailing-spaces
      '@stylistic/js/no-trailing-spaces': [
        'error',
        {
          skipBlankLines: false,
          ignoreComments: false
        }
      ],

      // https://eslint.style/rules/js/no-whitespace-before-property
      '@stylistic/js/no-whitespace-before-property': [
        'error'
      ],

      // https://eslint.style/rules/js/nonblock-statement-body-position
      '@stylistic/js/nonblock-statement-body-position': [
        'error',
        'beside'
      ],

      // https://eslint.style/rules/js/object-curly-newline
      '@stylistic/js/object-curly-newline': [
        'error',
        {
          ObjectExpression:  { multiline: true, consistent: true },
          ObjectPattern:     { multiline: true, consistent: true },
          ImportDeclaration: "always",
          ExportDeclaration: "always",
        }
      ],

      // https://eslint.style/rules/js/object-curly-spacing
      '@stylistic/js/object-curly-spacing': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/object-property-newline
      '@stylistic/js/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true
        }
      ],

      // https://eslint.style/rules/js/one-var-declaration-per-line
      '@stylistic/js/one-var-declaration-per-line': [
        'error'
      ],

      // https://eslint.style/rules/js/operator-linebreak
      '@stylistic/js/operator-linebreak': [
        'error',
        'none',
        {
          overrides: {
            '?': 'ignore',
            ':': 'ignore',
          }
        }
      ],

      // https://eslint.style/rules/js/padded-blocks
      '@stylistic/js/padded-blocks': [
        'error',
        {
          classes: 'always'
        }
      ],

      // ? this is interesting, maybe I’ll configure it later
      // https://eslint.style/rules/js/padding-line-between-statements
      '@stylistic/js/padding-line-between-statements': [
        'off'
      ],

      // https://eslint.style/rules/js/quote-props
      '@stylistic/js/quote-props': [
        'error',
        'as-needed'
      ],

      // https://eslint.style/rules/js/quotes
      '@stylistic/js/quotes': [
        'error', 
        'single',
        { 
          allowTemplateLiterals: true 
        }
      ],

      // https://eslint.style/rules/js/rest-spread-spacing
     '@stylistic/js/rest-spread-spacing': [
        'error', 
        'never'
      ],

      // ALERT conflict with rule "@stylistic/ts/semi"
      // https://eslint.style/rules/js/semi
      // '@stylistic/js/semi': [
      //   'error',
      //   'always'
      // ],

      // https://eslint.style/rules/js/semi-spacing
      '@stylistic/js/semi-spacing': [
        'error',
        {
          before: false,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/semi-style
      '@stylistic/js/semi-style': [
        'error',
        'last'
      ],

      // https://eslint.style/rules/js/space-before-blocks
      '@stylistic/js/space-before-blocks': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/space-before-function-paren
      '@stylistic/js/space-before-function-paren': [
        'error',
        {
          anonymous:  'never',
          named:      'never',
          asyncArrow: 'always'
        }
      ],

      // https://eslint.style/rules/js/space-in-parens
      '@stylistic/js/space-in-parens': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/space-infix-ops
      '@stylistic/js/space-infix-ops': [
        'error'
      ],

      // https://eslint.style/rules/js/space-unary-ops
      '@stylistic/js/space-unary-ops': [
        'error',
        {
          words:    true,
          nonwords: false
        }
      ],

      // https://eslint.style/rules/js/spaced-comment
      '@stylistic/js/spaced-comment': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/js/switch-colon-spacing
      '@stylistic/js/switch-colon-spacing': [
        'error',
        {
          before: false,
          after:  true
        }
      ],

      // https://eslint.style/rules/js/template-curly-spacing
      '@stylistic/js/template-curly-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/template-tag-spacing
      '@stylistic/js/template-tag-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/js/wrap-iife
      '@stylistic/js/wrap-iife': [
        'error',
        'inside'
      ],

      // https://eslint.style/rules/js/wrap-regex
      '@stylistic/js/wrap-regex': [
        'error'
      ],

      // https://eslint.style/rules/js/yield-star-spacing
      '@stylistic/js/yield-star-spacing': [
        'error',
        'after'
      ],
      
      // ==================================================

      // https://eslint.style/rules/ts/block-spacing
      '@stylistic/ts/block-spacing': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/ts/brace-style
      '@stylistic/ts/brace-style': [
        'error',
        '1tbs'
      ],

      // https://eslint.style/rules/ts/comma-dangle
      '@stylistic/ts/comma-dangle': [
        'error',
        {
          arrays:    'never',
          objects:   'never',
          imports:   'never',
          exports:   'never',
          functions: 'never'
        }
      ],

      // https://eslint.style/rules/ts/comma-spacing
      '@stylistic/ts/comma-spacing': [
        'error',
        {
          before: false,
          after:  true
        }
      ],

      // https://eslint.style/rules/ts/function-call-spacing
      '@stylistic/ts/function-call-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/ts/indent
      '@stylistic/ts/indent': [
        'error',
        2,
        {
          VariableDeclarator:       'first',
          SwitchCase:               1,
          outerIIFEBody:            1,
          MemberExpression:         1,
          ArrayExpression:          1,
          ObjectExpression:         1,
          ImportDeclaration:        1,
          flatTernaryExpressions:   false,
          offsetTernaryExpressions: true,
          ignoreComments:           false,
          FunctionDeclaration: {
            body:       1,
            parameters: 1
          },
          FunctionExpression: {
            body:       1,
            parameters: 1
          },
          StaticBlock: {
            body: 1
          },
          CallExpression: {
            arguments: 1
          }
        }
      ],

      // https://eslint.style/rules/ts/key-spacing
      '@stylistic/ts/key-spacing': [
        'error',
        {
          singleLine: {
            mode:       'minimum',
            beforeColon: false,
            afterColon:  true,
          },
          multiLine: {
            mode:       'minimum',
            beforeColon: false,
            afterColon:  true,
            align:       'value',
          }
        }
      ],

      // https://eslint.style/rules/ts/keyword-spacing
      '@stylistic/ts/keyword-spacing': [
        'error',
        {
          before: true,
          after:  true
        }
      ],

      // https://eslint.style/rules/ts/lines-around-comment
      '@stylistic/ts/lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment:  false,
          beforeLineComment:  false,
          afterLineComment:   false,
          allowBlockStart:    true,
          allowBlockEnd:      true,
          allowObjectStart:   true,
          allowObjectEnd:     true,
          allowArrayStart:    true,
          allowArrayEnd:      true,
          allowClassStart:    true,
          allowClassEnd:      true,

          allowEnumStart:      true,
          allowEnumEnd:        true,
          allowInterfaceStart: true,
          allowInterfaceEnd:   true,
          allowModuleStart:    true,
          allowModuleEnd:      true,
          allowTypeStart:      true,
          allowTypeEnd:        true
        }
      ],

      // https://eslint.style/rules/ts/lines-between-class-members
      '@stylistic/ts/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterOverload: true
        }
      ],

      // https://eslint.style/rules/ts/member-delimiter-style
      '@stylistic/ts/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter:   "semi",
            requireLast: true
          },
          singleline: {
            delimiter:   "semi",
            requireLast: true
          },
        }
      ],

      // https://eslint.style/rules/ts/no-extra-parens
      '@stylistic/ts/no-extra-parens': [
        'error',
        'all',
        {
          conditionalAssign:                  false,
          returnAssign:                       false,
          nestedBinaryExpressions:            false,
          ternaryOperandBinaryExpressions:    false,
          enforceForArrowConditionals:        false,
          enforceForSequenceExpressions:      false,
          enforceForNewInMemberExpressions:   false,
          enforceForFunctionPrototypeMethods: false,
          ignoreJSX:                          'all'
        }
      ],

      // https://eslint.style/rules/ts/no-extra-semi
      '@stylistic/ts/no-extra-semi': [
        'error'
      ],

      // https://eslint.style/rules/ts/object-curly-spacing
      '@stylistic/ts/object-curly-spacing': [
        'error',
        'always'
      ],

      // ? this is interesting, maybe I’ll configure it later
      // https://eslint.style/rules/ts/padding-line-between-statements
      '@stylistic/ts/padding-line-between-statements': [
        'off'
      ],

      // https://eslint.style/rules/ts/quote-props
      '@stylistic/ts/quote-props': [
        'error',
        'as-needed'
      ],

      // https://eslint.style/rules/ts/quotes
      '@stylistic/ts/quotes': [
        'error', 
        'single',
        { 
          allowTemplateLiterals: true 
        }
      ],

      // https://eslint.style/rules/ts/semi
      '@stylistic/ts/semi': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/ts/space-before-blocks
      '@stylistic/ts/space-before-blocks': [
        'error',
        'always'
      ],

      // https://eslint.style/rules/ts/space-before-function-paren
      '@stylistic/ts/space-before-function-paren': [
        'error',
        {
          anonymous:  'never',
          named:      'never',
          asyncArrow: 'always'
        }
      ],

      // https://eslint.style/rules/ts/space-infix-ops
      '@stylistic/ts/space-infix-ops': [
        'error'
      ],

      // https://eslint.style/rules/ts/type-annotation-spacing
      '@stylistic/ts/type-annotation-spacing': [
        'error',
        {
          before: false,
          after:  true,
          overrides: {
            arrow: {
              before: true,
              after:  true
            },
            colon: {
              before: false,
              after:  true
            }
          }
        }
      ],
      
      // ==================================================

      // https://eslint.style/rules/jsx/jsx-child-element-spacing
      '@stylistic/jsx/jsx-child-element-spacing': [
        'off'
      ],

      // https://eslint.style/rules/jsx/jsx-closing-bracket-location
      '@stylistic/jsx/jsx-closing-bracket-location': [
        'error',
        'tag-aligned'
      ],

      // https://eslint.style/rules/jsx/jsx-closing-tag-location
      '@stylistic/jsx/jsx-closing-tag-location': [
        'error'
      ],

      // https://eslint.style/rules/jsx/jsx-curly-brace-presence
      '@stylistic/jsx/jsx-curly-brace-presence': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/jsx/jsx-curly-newline
      '@stylistic/jsx/jsx-curly-newline': [
        'error',
        { 
          multiline:  'consistent', 
          singleline: 'consistent' 
        }
      ],

      // https://eslint.style/rules/jsx/jsx-curly-spacing
      '@stylistic/jsx/jsx-curly-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/jsx/jsx-equals-spacing
      '@stylistic/jsx/jsx-equals-spacing': [
        'error',
        'never'
      ],

      // https://eslint.style/rules/jsx/jsx-first-prop-new-line
      '@stylistic/jsx/jsx-first-prop-new-line': [
        'error',
        'multiline-multiprop'
      ],

      // https://eslint.style/rules/jsx/jsx-function-call-newline
      '@stylistic/jsx/jsx-function-call-newline': [
        'error',
        'multiline'
      ],

      // https://eslint.style/rules/jsx/jsx-indent
      '@stylistic/jsx/jsx-indent': [
        'error',
        2
      ],

      // https://eslint.style/rules/jsx/jsx-indent-props
      '@stylistic/jsx/jsx-indent-props': [
        'error',
        2
      ],

      // https://eslint.style/rules/jsx/jsx-max-props-per-line
      '@stylistic/jsx/jsx-max-props-per-line': [
        'error',
        {
          maximum: {
            single: 5,
            multi:  1,
          }
        }
      ],

      // https://eslint.style/rules/jsx/jsx-newline
      '@stylistic/jsx/jsx-newline': [
        'off'
      ],

      // https://eslint.style/rules/jsx/jsx-one-expression-per-line
      '@stylistic/jsx/jsx-one-expression-per-line': [
        'off'
      ],

      // https://eslint.style/rules/jsx/jsx-pascal-case
      '@stylistic/jsx/jsx-pascal-case': [
        'error'
      ],

      // https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
      '@stylistic/jsx/jsx-props-no-multi-spaces': [
        'error'
      ],

      // https://eslint.style/rules/jsx/jsx-self-closing-comp
      '@stylistic/jsx/jsx-self-closing-comp': [
        'error'
      ],

      // https://eslint.style/rules/jsx/jsx-sort-props
      '@stylistic/jsx/jsx-sort-props': [
        'off'
      ],

      // https://eslint.style/rules/jsx/jsx-tag-spacing
      '@stylistic/jsx/jsx-tag-spacing': [
        'error',
        {
          closingSlash:      'never',
          beforeSelfClosing: 'always',
          afterOpening:      'never',
          beforeClosing:     'never',
        }
      ],

      // https://eslint.style/rules/jsx/jsx-wrap-multilines
      '@stylistic/jsx/jsx-wrap-multilines': [
        'error',
        {
          declaration:   'parens-new-line',
          assignment:    'parens-new-line',
          return:        'parens-new-line',
          arrow:         'parens-new-line',
          condition:     'parens-new-line',
          logical:       'parens-new-line',
          prop:          'parens-new-line',
          propertyValue: 'parens-new-line',
        }
      ],

    }
  }
)