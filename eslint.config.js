import { tsParser } from '@typescript-eslint/parser';
import { tsPlugin } from '@typescript-eslint/eslint-plugin';
import { pluginVue } from 'eslint-plugin-vue'

module.exports = [
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser, // Dùng bộ parser của TypeScript
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-unused-vars': 'off', // Tắt rule của JS thuần
      '@typescript-eslint/no-unused-vars': 'warn', // Bật rule cảnh báo biến không dùng của TS
      'vue/multi-word-component-names': 'off',
    },
  },
];
