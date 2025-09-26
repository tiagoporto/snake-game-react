export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{ts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored',
    'vitest --passWithNoTests',
  ],
}
