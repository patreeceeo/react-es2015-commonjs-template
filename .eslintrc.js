/* global module */
module.exports = {
  "rules": {
    /*
     * Warn about React not being defined in a file that uses JSX.
     */
    "react/react-in-jsx-scope": 1,
    /*
     * Do not warn about React not being explicitly used in a file that uses
     * JSX.
     */
    "react/jsx-uses-react": 1,
    /*
     * Do not warn about unused vars if the vars are only used in JSX.
     */
    "react/jsx-uses-vars": 1,
    "no-trailing-spaces": [ 1 ],
    "no-unused-expressions": [
      1,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    "vars-on-top": [ 1 ],
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ]
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ]
};
