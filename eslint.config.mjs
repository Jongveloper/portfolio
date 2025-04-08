import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';

const config = [
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ['**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.js'],
    settings: {
      prettier: {
        printWidth: 140,
      },
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        __DEV__: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: eslintPluginImport,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'eol-last': ['error', 'always'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-native',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@react-navigation/*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@tanstack/*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@screens/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@shared/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
      'no-unused-vars': [2, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    },
  },
];

export default config;
