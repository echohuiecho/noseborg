module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', 'default', 'about']
    }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }]
  },
};
