<br>

<h1 align="center">Angular Strict ESLint</h1>

<p align="center">Modern ESLint configuration with strict rules for <strong>Angular</strong> development</p>

<p align="center">
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/v/eslint-config-angular-strict/latest.svg" alt="NPM Version" /></a>
    <a href="https://github.com/Jbz797/eslint-config-angular-strict/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-angular-strict.svg" alt="GitHub license" /></a>
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/dm/eslint-config-angular-strict.svg" alt="NPM Downloads" /></a>
</p>

<br>

## ⚠️ Version 2.0.0 - Complete ESLint Bundle

This package includes **ESLint 9** and uses the new **flat configuration format** : [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

## What's Included

#### ✨ **No additional ESLint installation needed!** Everything is bundled.

- ✅ **All plugins and parsers** (complete setup)
- ✅ **Angular ESLint** (Angular 18+ support)
- ✅ **ESLint 9** (bundled - no separate installation needed)
- ✅ **Stylistic** (modern formatting rules)
- ✅ **TypeScript ESLint** (latest rules)

## Requirements

- **Angular 18+**
- **Node.js 18+**
- **TypeScript 5.0+**

## Installation

**One command setup** - ESLint is included!

```sh
npm install eslint-config-angular-strict --save-dev
```

or

```sh
yarn add eslint-config-angular-strict --dev
```

**⚠️ Important**: Remove any existing `eslint` dependency from your project - it's included!

## Configure ESLint

Create an `eslint.config.js` file (ESLint 9 flat config format):

```javascript
import angularStrict from 'eslint-config-angular-strict';

export default [
  ...angularStrict,
  // Your custom overrides here
];
```

### TypeScript Configuration

Make sure your `tsconfig.json` is properly configured:

```javascript
{
  "compilerOptions": {
    (...),
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "strict": true,
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictStandalone": true,
    "strictTemplates": true
  }
}
```

## Features

### Angular Rules

- ✅ Accessibility enforcement
- ✅ Angular 18+ standalone components support
- ✅ Component/Directive naming conventions
- ✅ Lifecycle method validation
- ✅ Template best practices

### TypeScript Rules

- ✅ Code style consistency
- ✅ Import/export management
- ✅ Modern ES2020+ features
- ✅ Strict type checking

### Performance

- ✅ Better caching and incremental linting
- ✅ Fast linting with ESLint 9 improvements
- ✅ Optimized for large Angular projects

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

MIT © [Jean-benoit Gautier](https://github.com/Jbz797)
