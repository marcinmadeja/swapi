module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "settings": {
    "import/resolver": {
      "node": { "paths": [ "./src/" ] }
    }
  },
  "extends": ["airbnb"],
  "rules": {
    "react/prop-types": 1,
    "arrow-body-style": 0,
    "no-console": 0,
    "no-unused-vars": 1,
    "no-plusplus": 0,
    "prefer-const": 1,
    "arrow-parens": 0,
    "no-self-compare": 1,
    "prefer-arrow-callback": 0,
    "no-cond-assign" : 1,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "no-trailing-spaces": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "no-restricted-syntax" : 0,
    "max-len": 1,
    "no-continue": 0,
    "jsx-a11y/href-no-hash": 0,
    "react/jsx-filename-extension": 0,
    "no-return-assign": 0,
    "class-methods-use-this": 0,
    "react/prefer-stateless-function": 0,
    "no-useless-constructor": 0,
    "jsx-a11y/label-has-for": 0,
    "no-tabs": 0,
    "func-names": 0,
    "no-prototype-builtins": 0,
    "no-unneeded-ternary": 0,
    "react/forbid-prop-types": 0,
    "camelcase": 0,
    "prefer-rest-params": 1,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 1,
    "no-extra-boolean-cast": 0,
    "no-else-return": 0,
    "object-curly-newline": 0,
    "prefer-destructuring": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/sort-comp": 0,
    "function-paren-newline": 0
  }
}