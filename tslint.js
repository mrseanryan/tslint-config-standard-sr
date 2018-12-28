module.exports = {
  extends: ["tslint-eslint-rules"],
  rules: {
    // TSLint rules.
    "no-internal-module": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        parameter: "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        parameter: "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "await-promise": true,
    curly: [true, "ignore-same-line"],
    deprecation: true,
    "label-position": true,
    "no-arg": true,
    "no-conditional-assignment": true,
    "no-duplicate-imports": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-reference-import": true,
    "no-return-await": true,
    "no-switch-case-fall-through": true,
    "no-unused-expression": [
      true,
      "allow-fast-null-checks",
      "allow-tagged-template"
    ],
    "no-var-keyword": true,
    radix: true,
    "space-within-parens": [true, 0],
    "triple-equals": [true, "allow-null-check"],
    "use-isnan": true,
    eofline: true,
    "ter-indent": [
      true,
      2,
      {
        SwitchCase: 1
      }
    ],
    "no-trailing-whitespace": true,
    "trailing-comma": [
      true,
      {
        multiline: "never",
        singleline: "never"
      }
    ],
    "class-name": true,
    "comment-format": [true, "check-space"],
    "jsdoc-format": true,
    "new-parens": true,
    "no-angle-bracket-type-assertion": true,
    "no-consecutive-blank-lines": true,
    "no-floating-promises": true,
    "no-misused-new": true,
    "no-string-throw": true,
    "no-unnecessary-qualifier": true,
    "no-unnecessary-type-assertion": true,
    "one-line": [
      true,
      "check-catch",
      "check-finally",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": true,
    quotemark: [true, "single", "avoid-escape", "jsx-single"],
    semicolon: [true, "never"],
    "strict-type-predicates": true,
    "space-before-function-paren": [true, "always"],
    "unified-signatures": true,
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      // 'check-module',
      "check-rest-spread",
      "check-type",
      "check-typecast",
      "check-type-operator",
      "check-preblock"
    ],
    // TSLint ESLint rules.
    "no-constant-condition": [
      true,
      {
        checkLoops: false
      }
    ],
    "no-control-regex": true,
    "no-duplicate-case": true,
    "no-empty-character-class": true,
    "no-ex-assign": true,
    "no-extra-boolean-cast": true,
    "no-inner-declarations": [true, "functions"],
    "no-invalid-regexp": true,
    "ter-no-irregular-whitespace": true,
    "no-regex-spaces": true,
    "ter-no-sparse-arrays": true,
    "ter-func-call-spacing": [true, "never"],
    "no-unexpected-multiline": true,
    "valid-typeof": true,
    "ter-arrow-spacing": [
      true,
      {
        before: true,
        after: true
      }
    ],
    "no-multi-spaces": true,
    "handle-callback-err": [true, "^(err|error)$"],
    "block-spacing": [true, "always"],
    "brace-style": [
      true,
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    "object-curly-spacing": [true, "always"],
    // --------------------------------------
    // Added by SR:
    "adjacent-overload-signatures": true,
    "ban-types": false,
    "member-access": [true, "no-public"],
    "member-ordering": [true, "static-before-instance"],
    "no-any": false,
    "no-empty-interface": true,
    "no-import-side-effect": false,
    "no-inferrable-types": false,
    "no-internal-module": true,
    "no-magic-numbers": false,
    "no-namespace": false,
    "no-non-null-assertion": false,
    "no-parameter-reassignment": true,
    "no-reference": true,
    "no-unnecessary-type-assertion": false, // false positives?
    "no-var-requires": false,
    "only-arrow-functions": false,
    "prefer-for-of": true,
    "promise-function-async": false,
    typedef: false,
    "unified-signatures": false,

    // Behaviour:
    "await-promise": true,
    "ban-comma-operator": true,
    ban: [true, "/node_modules", "/dist"],
    curly: [true, "ignore-same-line"],
    forin: false,
    "import-blacklist": false,
    "label-position": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-console": false,
    "no-construct": false,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-duplicate-switch-case": true,
    "no-duplicate-variable": true,
    "no-dynamic-delete": true,
    "no-empty": true,
    "no-eval": true,
    "no-floating-promises": false,
    "no-for-in-array": true,
    "no-implicit-dependencies": false,
    "no-inferred-empty-object-type": true,
    "no-invalid-template-strings": true,
    "no-invalid-this": false,
    "no-misused-new": true,
    "no-null-keyword": false,
    "no-object-literal-type-assertion": true,
    "no-return-await": false,
    "no-shadowed-variable": true,
    "no-sparse-arrays": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-this-assignment": [true, "allow-destructuring"],
    "no-unbound-method": false,
    "no-unnecessary-class": true,
    "no-unsafe-any": false,
    "no-unsafe-finally": true,
    "no-unused-variable": false, // buggy in tslint?
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "strict-type-predicates": true,
    "switch-default": true,
    "triple-equals": true,
    "use-default-type-parameter": true,
    "use-isnan": true,

    // Code style:
    "prefer-switch": true,
    "prefer-template": [true, "allow-single-concat"],
    quotemark: [true, "double", "jsx-double", "avoid-escape"],

    semicolon: [true, "always", "ignore-bound-class-methods"],

    "type-literal-delimiter": true,
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "ban-keywords"
    ]
  }
};
