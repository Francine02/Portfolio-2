import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        localStorage: 'readonly',
        alert: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@components', './src/components'],
            ['@constants', './src/constants'],
            ['@assets', './src/assets'],
            ['@i18n', './src/i18n'],
            ['@projects', './src/projects'],
            ['@lib', './src/lib'],
          ],
          extensions: ['.js', '.jsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{js,jsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'react/jsx-uses-vars': 'warn',
    },
  },
];
