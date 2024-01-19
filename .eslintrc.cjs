module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  root: true,

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-nested-ternary': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
    'no-shadow': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'no-plusplus': 'warn',
    '@typescript-eslint/no-shadow': ['off'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: true,
      },
    ],

    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      2,
      {
        groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/destructuring-assignment': ['warn', 'always'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/no-cycle': 'off',
  },
}
