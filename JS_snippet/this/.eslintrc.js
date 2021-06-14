module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
    },
    "extends": ["naver"],
    "parserOptions": {
      "ecmaVersion": 9, // Eslint that support async
      "sourceType": "module"
    },
    "rules": {
      "indent": [
        "error",
        4
      ],
      "quotes": [
        "error",
        "double"
      ],
      "semi": [
        "error",
        "always"
      ],
      "linebreak-style": ["error", require("os").EOL === "\r\n" ? "windows" : "unix"],
      "consistent-return": "off",
      "array-callback-return": "off",
      "array-element-newline": "off",
      "max-len": "off",
      "no-console": "off"
    }
  };
  