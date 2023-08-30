module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-native", "unused-imports"],
    rules: {
        "arrow-body-style": ["error", "as-needed"],
        "eol-last": ["error", "always"],
        "object-shorthand": ["error", "always"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/hook-use-state": ["warn", { "allowDestructuredState": false }],
        "react/jsx-curly-brace-presence": ["error", "never"],
        "react/react-in-jsx-scope": "off",
        "react-native/no-unused-styles": 2,
        "react-native/no-single-element-style-arrays": 2,
        "react-native/no-inline-styles": 2,
        "@typescript-eslint/no-unused-vars" : ["off"],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-empty-interface": ["off", {
            "allowSingleExtends": false
          }],
        "unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": ["error", {
            "vars": "all", 
            "varsIgnorePattern": "^_", 
            "args": "after-used", 
            "argsIgnorePattern": "^_" 
        }]
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
