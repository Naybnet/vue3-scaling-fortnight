module.exports = {
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "prettier"],
    rules: {},
    overrides: [
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
            rules: {
                "no-unused-vars": "off",
                "no-undef": "off",
                "@typescript-eslint/no-unused-vars": "off",
            },
        },
    ],
}
