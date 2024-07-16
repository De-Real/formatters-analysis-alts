

# Alternatives for ESLint and Prettier


To start project you will need:
1. To copy GitHub repository;
2. run `yarn` or `npm install` to install all dependencies;
3. Check alternative with following commands:
----------
### Formatter commands on react-check-format.js:
- Prettier: `prettier --write ./src/test-files/react-check-formatter.tsx`
- Biome.js: `yarn biome format --write ./src/test-files/react-check-formatter.tsx`

> ⚠️ Note it will change (format) files, to remove file changing remove --write flag.

#### Migration to Biome from Prettier:
`biome migrate prettier --write`

---------
### Analysis tool commands on js-check-analysis.js:
- ESLint: `npx eslint ./src/test-files/js-check-analysis.js`
- Biome.js: `yarn biome check ./src/test-files/js-check-analysis.js`
- OXC: `oxlint ./src/test-files/js-check-analysis.js`

### Analysis tool commands on react-check-analysis.tsx:
- ESLint: `npx eslint ./src/test-files/react-check-analysis.tsx`
- Biome.js: `yarn biome check ./src/test-files/react-check-analysis.tsx`
- OXC: oxlint ./src/test-files/react-check-analysis.tsx

#### Migration to Biome from ESLint:
`biome migrate eslint --write`

