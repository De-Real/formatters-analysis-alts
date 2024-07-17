

# Alternatives for ESLint and Prettier


To start project you will need:
1. To copy GitHub repository;
2. run `yarn` or `npm install` to install all dependencies;
3. Check alternative with following commands:
----------
### Formatter commands on react-check-formatter.js:
- Prettier: `npx prettier --write ./src/test-files/react-check-formatter.tsx`
- Biome.js: `npx @biomejs/biome format --write ./src/test-files/react-check-formatter.tsx`

> ⚠️ Note it will change (format) files, to remove file changing remove --write flag.

#### Migration to Biome from Prettier:
`npx @biomejs/biome migrate prettier --write`

---------
### Analysis tool commands on js-check-analysis.js:
- ESLint: `npx eslint ./src/test-files/js-check-analysis.js`
- Biome.js: `npx @biomejs/biome check ./src/test-files/js-check-analysis.js`
- OXC: `npx oxlint@latest ./src/test-files/js-check-analysis.js`

### Analysis tool commands on react-check-analysis.tsx:
- ESLint: `npx eslint ./src/test-files/react-check-analysis.tsx`
- Biome.js: `npx @biomejs/biome check ./src/test-files/react-check-analysis.tsx`
- OXC: `npx oxlint@latest ./src/test-files/react-check-analysis.tsx`

#### Migration to Biome from ESLint:
`npx @biomejs/biome migrate eslint --write`

