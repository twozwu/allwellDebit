module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    "plugin:nuxt/recommended",
    'plugin:vue/recommended',
    'standard',
    'prettier'
  ],
  plugins: [
    'vue'
  ],
  rules: {},
  globals: {
    $: 'readonly',
    moment: 'readonly'
  }
}