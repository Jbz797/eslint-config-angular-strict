<p align="center">
  <img src="logo.svg" alt="Angular Strict ESLint Logo" width="120" height="120">
</p>

<h1 align="center">Angular Strict ESLint</h1>

<p align="center">Modern ESLint configuration with strict rules for <strong>Angular</strong> development</p>

<p align="center">
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/v/eslint-config-angular-strict/latest.svg" alt="NPM Version" /></a>
    <a href="https://github.com/Jbz797/eslint-config-angular-strict/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-angular-strict.svg" alt="GitHub license" /></a>
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/dm/eslint-config-angular-strict.svg" alt="NPM Downloads" /></a>
</p>

<br>

## ⚠️ V2 - Flat Config

This package includes **ESLint 9** and uses the new **flat configuration format** ([ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)). Requires **Angular 18+** and **Node.js 18+**.

## Overview

A production-ready, opinionated ESLint configuration that enforces best practices for Angular applications. Combines rules from industry-leading plugins into a single package with zero additional configuration required.

## Features

- **🅰️ Angular**: 35+ rules for standalone components, lifecycle methods, component standards, and modern control flow syntax, and more...
- **📘 TypeScript**: Strict typing, member ordering, promise handling, type safety enforcement, and more...
- **✨ Code Quality**: Complexity limits, file length control, import cycle detection, anti-patterns prevention, and more...
- **🎨 Style**: Airbnb extended compliance, consistent formatting, organized imports, and more...
- **🔍 Templates**: 25+ HTML template rules including alphabetical attributes, complexity limits checks, trackBy enforcement, and more...

## What's Included

#### ✨ **No additional ESLint installation needed!** Everything is bundled.

- <img src="https://eslint-airbnb-extended.nishargshah.dev/logo.png" width="16" height="16"> [**Airbnb Extended**](https://github.com/nishargshah/eslint-config-airbnb-extended) - Airbnb style guide
- <img src="https://avatars.githubusercontent.com/u/53234240?s=48&" width="16" height="16"> [**Angular ESLint**](https://github.com/angular-eslint/angular-eslint) - Angular-specific rules
- <img src="https://eslint.org/icon-512.png" width="16" height="16"> [**ESLint**](https://github.com/eslint/eslint) - Core linting engine
- 📦 [**Import-X**](https://github.com/un-ts/eslint-plugin-import-x) - Import/export validation
- <img src="https://avatars.githubusercontent.com/u/144717797?s=48&" width="16" height="16"> [**Stylistic**](https://github.com/eslint-stylistic/eslint-stylistic) - Code formatting rules
- <img src="https://avatars.githubusercontent.com/u/46634674?s=48&" width="16" height="16"> [**TypeScript ESLint**](https://github.com/typescript-eslint/typescript-eslint) - TypeScript linting
- 🦄 [**Unicorn**](https://github.com/sindresorhus/eslint-plugin-unicorn) - More than 100 powerful ESLint rules

## Installation

### 1. Install Package

```sh
npm install eslint-config-angular-strict --save-dev
```

or

```sh
yarn add eslint-config-angular-strict --dev
```

**⚠️ Important**: Remove any existing `eslint` dependency from your project - it's included!

### 2. Configure ESLint

Create an `eslint.config.js` file (ESLint 9 flat config format):

```javascript
import angularStrict from 'eslint-config-angular-strict';

export default [
  ...angularStrict,
  // Your custom overrides here
];
```

### 3. Update package.json

Add the following to your `package.json`:

```json
{
  "type": "module"
}
```

## TypeScript Configuration

Make sure your `tsconfig.json` is properly configured:

```javascript
{
  "compilerOptions": {
    (...),
    "allowUnusedLabels": false,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "strict": true
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictStandalone": true,
    "strictTemplates": true
  }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

MIT © [Jean-benoit Gautier](https://github.com/Jbz797)
