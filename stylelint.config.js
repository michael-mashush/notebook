/** @type {import('stylelint').Config} */
export default {

  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss'
  ],

  plugins: [
    '@stylistic/stylelint-plugin',
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-order',
    'stylelint-scss'
  ],

  rules: {

    // https://stylelint.io/user-guide/rules/no-descending-specificity
    'no-descending-specificity': null,

    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties
    'declaration-block-no-duplicate-custom-properties': true,

    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates',
          'consecutive-duplicates-with-different-values',
          'consecutive-duplicates-with-different-syntaxes'
        ]
      }
    ],

    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
    'font-family-no-duplicate-names': true,

    // https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors
    'keyframe-block-no-duplicate-selectors': true,
    
    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    'no-duplicate-at-import-rules': true,

    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    'no-duplicate-selectors': true,

    // https://stylelint.io/user-guide/rules/block-no-empty
    'block-no-empty': true,

    // https://stylelint.io/user-guide/rules/comment-no-empty
    'comment-no-empty': true,

    // https://stylelint.io/user-guide/rules/no-empty-source
    'no-empty-source': true,

    // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    'color-no-invalid-hex': true,

    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    'function-calc-no-unspaced-operator': true,

    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    'keyframe-declaration-no-important': true,

    // https://stylelint.io/user-guide/rules/media-query-no-invalid
    'media-query-no-invalid': true,

    // https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid
    'named-grid-areas-no-invalid': true,

    // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    'no-invalid-double-slash-comments': true,

    // https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule
    'no-invalid-position-at-import-rule': true,

    // https://stylelint.io/user-guide/rules/string-no-newline
    'string-no-newline': true,

    // https://stylelint.io/user-guide/rules/no-irregular-whitespace
    'no-irregular-whitespace': true,

    // https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function
    'custom-property-no-missing-var-function': true,

    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    'font-family-no-missing-generic-family-keyword': true,

    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    'function-linear-gradient-no-nonstandard-direction': true,

    // https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable
    'selector-anb-no-unmatchable': true,

    // https://stylelint.io/user-guide/rules/annotation-no-unknown
    'annotation-no-unknown': true,

    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': null,

    // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown
    'declaration-property-value-no-unknown': true,

    // https://stylelint.io/user-guide/rules/function-no-unknown
    'function-no-unknown': true,

    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
    'media-feature-name-no-unknown': true,

    // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown
    'media-feature-name-value-no-unknown': true,

    // https://stylelint.io/user-guide/rules/no-unknown-animations
    'no-unknown-animations': true,

    // https://stylelint.io/user-guide/rules/no-unknown-custom-media
    'no-unknown-custom-media': true,

    // https://stylelint.io/user-guide/rules/no-unknown-custom-properties
    'no-unknown-custom-properties': null,

    // https://stylelint.io/user-guide/rules/property-no-unknown
    'property-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-class-pattern': null,

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    'selector-pseudo-class-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    'selector-pseudo-element-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    'selector-type-no-unknown': true,

    // https://stylelint.io/user-guide/rules/unit-no-unknown
    'unit-no-unknown': true,

    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    'at-rule-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/color-hex-alpha
    'color-hex-alpha': null,

    // https://stylelint.io/user-guide/rules/color-named
    'color-named': 'never',

    // https://stylelint.io/user-guide/rules/color-no-hex
    'color-no-hex': null,

    // https://stylelint.io/user-guide/rules/declaration-no-important
    'declaration-no-important': null,

    // https://stylelint.io/user-guide/rules/length-zero-no-unit
    'length-zero-no-unit': true,

    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    'media-feature-name-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    'selector-no-qualifying-type': null,

    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    'selector-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    'value-no-vendor-prefix': null,

    // https://stylelint.io/user-guide/rules/function-name-case
    'function-name-case': 'lower',

    // https://stylelint.io/user-guide/rules/selector-type-case
    'selector-type-case': 'lower',

    // https://stylelint.io/user-guide/rules/value-keyword-case
    'value-keyword-case': 'lower',

    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'after-same-name',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested'
        ],
        ignoreAtRules: [
          'media',
          'mixin'
        ]
      }
    ],

    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    'comment-empty-line-before': 'never',

    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    'custom-property-empty-line-before': 'never',

    // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    'declaration-empty-line-before': 'never',

    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'first-nested'
        ]
      }
    ],

    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    'declaration-block-single-line-max-declarations': 1,

    // https://stylelint.io/user-guide/rules/declaration-property-max-values
    'declaration-property-max-values': null,

    // https://stylelint.io/user-guide/rules/max-nesting-depth
    'max-nesting-depth': 5,

    // https://stylelint.io/user-guide/rules/number-max-precision
    'number-max-precision': null,

    // https://stylelint.io/user-guide/rules/selector-max-attribute
    'selector-max-attribute': null,

    // https://stylelint.io/user-guide/rules/selector-max-class
    'selector-max-class': null,

    // https://stylelint.io/user-guide/rules/selector-max-combinators
    'selector-max-combinators': null,

    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    'selector-max-compound-selectors': null,

    // https://stylelint.io/user-guide/rules/selector-max-id
    'selector-max-id': null,

    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    'selector-max-pseudo-class': null,

    // https://stylelint.io/user-guide/rules/selector-max-specificity
    'selector-max-specificity': null,

    // https://stylelint.io/user-guide/rules/selector-max-type
    'selector-max-type': null,

    // https://stylelint.io/user-guide/rules/selector-max-universal
    'selector-max-universal': null,

    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    'time-min-milliseconds': [
      100,
      {
        ignore: [
          'delay'
        ]
      }
    ],

    // https://stylelint.io/user-guide/rules/alpha-value-notation
    'alpha-value-notation': 'number',

    // https://stylelint.io/user-guide/rules/color-function-notation
    'color-function-notation': 'modern',

    // https://stylelint.io/user-guide/rules/color-hex-length
    'color-hex-length': 'long',

    // https://stylelint.io/user-guide/rules/font-weight-notation
    'font-weight-notation': 'numeric',

    // https://stylelint.io/user-guide/rules/hue-degree-notation
    'hue-degree-notation': 'angle',

    // https://stylelint.io/user-guide/rules/import-notation
    'import-notation': 'url',

    // https://stylelint.io/user-guide/rules/keyframe-selector-notation
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

    // https://stylelint.io/user-guide/rules/lightness-notation
    'lightness-notation': 'number',

    // https://stylelint.io/user-guide/rules/media-feature-range-notation
    'media-feature-range-notation': 'context',

    // https://stylelint.io/user-guide/rules/selector-not-notation
    'selector-not-notation': 'complex',

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
    'selector-pseudo-element-colon-notation': 'double',

    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    'font-family-name-quotes': 'always-unless-keyword',

    // https://stylelint.io/user-guide/rules/function-url-quotes
    'function-url-quotes': 'always',

    // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    'selector-attribute-quotes': 'always',

    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-redundant-longhand-properties': true,

    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    'shorthand-property-no-redundant-values': true,

    // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    'comment-whitespace-inside': 'always',
      
    // ==================================================

    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/
    'scss/at-rule-no-unknown': true,

    // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-empty-line-before
    'scss/at-else-empty-line-before': 'never',

    // ==================================================

    // https://github.com/csstools/stylelint-value-no-unknown-custom-properties
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          './src/app/styles/const.css'
        ]
      }
    ],
      
    // ==================================================

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case
    '@stylistic/color-hex-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after
    '@stylistic/function-comma-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-before
    '@stylistic/function-comma-newline-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after
    '@stylistic/function-comma-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before
    '@stylistic/function-comma-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines
    '@stylistic/function-max-empty-lines': 0,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside
    '@stylistic/function-parentheses-newline-inside': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside
    '@stylistic/function-parentheses-space-inside': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after
    '@stylistic/function-whitespace-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero
    '@stylistic/number-leading-zero': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros
    '@stylistic/number-no-trailing-zeros': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes
    '@stylistic/string-quotes': 'single',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case
    '@stylistic/unit-case': 'lower',
     
    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after
    '@stylistic/value-list-comma-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-before
    '@stylistic/value-list-comma-newline-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after
    '@stylistic/value-list-comma-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before
    '@stylistic/value-list-comma-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines
    '@stylistic/value-list-max-empty-lines': 0,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case
    '@stylistic/property-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after
    '@stylistic/declaration-bang-space-after': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before
    '@stylistic/declaration-bang-space-before': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after
    '@stylistic/declaration-colon-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after
    '@stylistic/declaration-colon-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before
    '@stylistic/declaration-colon-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after
    '@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-before
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before
    '@stylistic/declaration-block-semicolon-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon
    '@stylistic/declaration-block-trailing-semicolon': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before
    '@stylistic/block-closing-brace-empty-line-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after
    '@stylistic/block-closing-brace-newline-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before
    '@stylistic/block-closing-brace-newline-before': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-after
    '@stylistic/block-closing-brace-space-after': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before
    '@stylistic/block-closing-brace-space-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after
    '@stylistic/block-opening-brace-newline-after': 'always',
    
    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-before
    '@stylistic/block-opening-brace-newline-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after
    '@stylistic/block-opening-brace-space-after': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before
    '@stylistic/block-opening-brace-space-before': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside
    '@stylistic/selector-attribute-brackets-space-inside': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after
    '@stylistic/selector-attribute-operator-space-after': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before
    '@stylistic/selector-attribute-operator-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after
    '@stylistic/selector-combinator-space-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before
    '@stylistic/selector-combinator-space-before': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space
    '@stylistic/selector-descendant-combinator-no-non-space': true,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines
    '@stylistic/selector-max-empty-lines': 0,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case
    '@stylistic/selector-pseudo-class-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case
    '@stylistic/selector-pseudo-element-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after
    '@stylistic/selector-list-comma-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-before
    '@stylistic/selector-list-comma-newline-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-after
    '@stylistic/selector-list-comma-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before
    '@stylistic/selector-list-comma-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after
    '@stylistic/media-feature-colon-space-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before
    '@stylistic/media-feature-colon-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case
    '@stylistic/media-feature-name-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside
    '@stylistic/media-feature-parentheses-space-inside': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after
    '@stylistic/media-feature-range-operator-space-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before
    '@stylistic/media-feature-range-operator-space-before': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after
    '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-before
    '@stylistic/media-query-list-comma-newline-before': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before
    '@stylistic/media-query-list-comma-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case
    '@stylistic/at-rule-name-case': 'lower',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-newline-after
    '@stylistic/at-rule-name-newline-after': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after
    '@stylistic/at-rule-name-space-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after
    '@stylistic/at-rule-semicolon-newline-after': 'always',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-space-before
    '@stylistic/at-rule-semicolon-space-before': 'never',

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/named-grid-areas-alignment
    '@stylistic/named-grid-areas-alignment': [
      true,
      {
        gap:         1,
        alignQuotes: true
      }
    ],

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation
    '@stylistic/indentation': 2,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/linebreaks
    '@stylistic/linebreaks': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines
    '@stylistic/max-empty-lines': 1,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length
    '@stylistic/max-line-length': 120,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-empty-first-line
    '@stylistic/no-empty-first-line': true,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace
    '@stylistic/no-eol-whitespace': true,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons
    '@stylistic/no-extra-semicolons': true,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline
    '@stylistic/no-missing-end-of-source-newline': null,

    // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unicode-bom
    '@stylistic/unicode-bom': 'never',

    // ==================================================

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order
    'order/properties-order': [

      'content',
      'cursor',
      
      'counter-set',
      'counter-reset',
      'counter-increment',

      'isolation',
      'position',
      'z-index',

      'inset',
      'inset-block',
      'inset-block-start',
      'inset-block-end',
      'inset-inline',
      'inset-inline-start',
      'inset-inline-end',

      'top',
      'right',
      'bottom',
      'left',

      'contain',
      'contain-intrinsic-size',
      'contain-intrinsic-block-size',
      'contain-intrinsic-inline-size',
      'contain-intrinsic-height',
      'contain-intrinsic-width',

      'container',
      'container-name',
      'container-type',

      'float',
      'display',
      'opacity',
      'visibility',
      'content-visibility',

      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-wrap',

      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',

      'justify-content',
      'justify-items',
      'justify-self',
      'align-content',
      'align-items',
      'align-self',
      'place-content',
      'place-items',
      'place-self',
      'order',
      'gap',
      'row-gap',
      'column-gap',

      'transform',
      'transform-box',
      'transform-origin',
      'transform-origin-x',
      'transform-origin-y',
      'transform-origin-z',
      'transform-style',

      'scale',
      'rotate',
      'translate',
      'backface-visibility',

      'perspective',
      'perspective-origin',
      'perspective-origin-x',
      'perspective-origin-y',

      'overflow',
      'overflow-x',
      'overflow-y',
      'overflow-anchor',
      'overflow-wrap',

      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'overscroll-behavior-x',
      'overscroll-behavior-y',

      'transition',
      'transition-behavior',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'transition-timing-function',

      'animation',
      'animation-name',
      'animation-duration',
      'animation-delay',
      'animation-composition',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
      'animation-timing-function',

      'offset',
      'offset-anchor',
      'offset-distance',
      'offset-path',
      'offset-position',
      'offset-rotate',

      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-block',
      'border-block-color',
      'border-block-style',
      'border-block-width',
      'border-block-start',
      'border-block-start-color',
      'border-block-start-style',
      'border-block-start-width',
      'border-block-end',
      'border-block-end-color',
      'border-block-end-style',
      'border-block-end-width',
      'border-inline',
      'border-inline-color',
      'border-inline-style',
      'border-inline-width',
      'border-inline-start',
      'border-inline-start-color',
      'border-inline-start-style',
      'border-inline-start-width',
      'border-inline-end',
      'border-inline-end-color',
      'border-inline-end-style',
      'border-inline-end-width',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-before',
      'border-before-width',
      'border-before-style',
      'border-before-color',
      'border-after',
      'border-after-width',
      'border-after-style',
      'border-after-color',
      'border-start',
      'border-start-width',
      'border-start-style',
      'border-start-color',
      'border-end',
      'border-end-width',
      'border-end-style',
      'border-end-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius',
      'border-image',
      'border-image-width',
      'border-image-slice',
      'border-image-source',
      'border-image-outset',
      'border-image-repeat',

      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',

      'border-collapse',
      'border-spacing',
      'empty-cells',
      
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-block',
      'margin-block-start',
      'margin-block-end',
      'margin-inline',
      'margin-inline-start',
      'margin-inline-end',
      'margin-end',
      'margin-start',

      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'padding-block',
      'padding-block-start',
      'padding-block-end',
      'padding-inline',
      'padding-inline-start',
      'padding-inline-end',
      'padding-end',
      'padding-start',

      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      'aspect-ratio',
      'block-size',
      'resize',

      'box-shadow',
      'box-sizing',

      'scroll-behavior',

      'scroll-margin',
      'scroll-margin-top',
      'scroll-margin-right',
      'scroll-margin-bottom',
      'scroll-margin-left',
      'scroll-margin-block',
      'scroll-margin-block-start',
      'scroll-margin-block-end',
      'scroll-margin-inline',
      'scroll-margin-inline-start',
      'scroll-margin-inline-end',

      'scroll-padding',
      'scroll-padding-top',
      'scroll-padding-right',
      'scroll-padding-bottom',
      'scroll-padding-left',
      'scroll-padding-block',
      'scroll-padding-block-start',
      'scroll-padding-block-end',
      'scroll-padding-inline',
      'scroll-padding-inline-start',
      'scroll-padding-inline-end',

      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scroll-snap-type-x',
      'scroll-snap-type-y',

      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',

      'image-orientation',
      'image-resolution',
      'image-rendering',

      'object-position',
      'object-fit',

      'background',
      'background-attachment',
      'background-blend-mode',
      'background-clip',
      'background-color',
      'background-size',
      'background-image',
      'background-origin',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-repeat-x',
      'background-repeat-y',

      'backdrop-filter',
      'appearance',
      'filter',

      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-width',
      'columns',

      'quotes',
      'hyphens',
      'hyphenate-character',
      'hyphenate-limit-chars',
      'tab-size',
      'white-space',
      'white-space-collapse',
      'letter-spacing',

      'word-break',
      'word-spacing',
      'word-wrap',

      'line-height',
      'line-break',

      'text-align',
      'text-align-last',
      'text-decoration',
      'text-decoration-style',
      'text-decoration-line',
      'text-decoration-color',
      'text-decoration-skip',
      'text-emphasis',
      'text-emphasis-style',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-fill-color',
      'text-indent',
      'text-justify',
      'text-orientation',
      'text-overflow',
      'text-rendering',
      'text-security',
      'text-shadow',
      'text-transform',
      'text-underline-position',
      'text-stroke',
      'text-wrap',
      'text-stroke',
      'text-stroke-width',
      'text-stroke-color',

      'font',
      'font-synthesis',
      'font-synthesis-small-caps',
      'font-synthesis-style',
      'font-synthesis-weight',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      'font-feature-settings',
      'font-optical-sizing',
      'font-palette',
      'font-display',
      'font-kerning',
      'font-display',
      'font-stretch',
      'font-family',
      'font-weight',
      'font-style',
      'font-size',

      'color',
      'color-scheme',

      'fill',
      'fill-opacity',
      'fill-rule',

      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',

      'clip',
      'clip-path',
      'clip-rule',

      'zoom',
      'min-zoom',
      'max-zoom',

      'pointer-events',
      'touch-action',
      'user-select',
      'user-zoom',
      
      'all'
    ]

  }

};