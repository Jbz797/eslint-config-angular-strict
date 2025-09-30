<br>

<h1 align="center">Angular Strict ESLint</h1>

<p align="center">Modern ESLint configuration with strict rules for <strong>Angular</strong> development</p>

<p align="center">
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/v/eslint-config-angular-strict/latest.svg" alt="NPM Version" /></a>
    <a href="https://github.com/Jbz797/eslint-config-angular-strict/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-angular-strict.svg" alt="GitHub license" /></a>
    <a href="https://www.npmjs.com/package/eslint-config-angular-strict"><img src="https://img.shields.io/npm/dm/eslint-config-angular-strict.svg" alt="NPM Downloads" /></a>
</p>

<br>

## ⚠️ Version 2.0.0 - Flat Config

This package includes **ESLint 9** and uses the new **flat configuration format** : [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

## What's Included

#### ✨ **No additional ESLint installation needed!** Everything is bundled.

- ✅ **Airbnb Extended** (strict coding standards)
- ✅ **Angular ESLint** (Angular 18+ support)
- ✅ **ESLint 9** (bundled)
- ✅ **Stylistic** (modern formatting rules)
- ✅ **TypeScript ESLint** (latest rules)

## Requirements

- **Angular 18+**
- **Node.js 18+**
- **TypeScript 5+**

## Installation

One command setup

```sh
npm install eslint-config-angular-strict --save-dev
```

or

```sh
yarn add eslint-config-angular-strict --dev
```

**⚠️ Important**: Remove any existing `eslint` dependency from your project - it's included!

## Package.json Configuration

**Required**: Add to your `package.json`:

```json
{
  "type": "module"
}
```

This is mandatory because eslint-config-angular-strict uses ES modules.

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

- ✅ **Best practices**: Standalone components, view encapsulation, injectable provided-in
- ✅ **Component standards**: Class suffixes (Component, Modal, Page), kebab-case selectors
- ✅ **Directive standards**: CamelCase selectors, proper class suffixes
- ✅ **Lifecycle enforcement**: Interface usage, method ordering, async restrictions
- ✅ **Template validation**: Accessibility, attributes ordering, trackBy functions

### TypeScript Rules

- ✅ **Code organization**: Import/export management, consistent type definitions
- ✅ **Modern patterns**: Optional chaining, destructuring, proper error handling
- ✅ **Performance**: Unbound method checking, proper async/await usage
- ✅ **Strict typing**: Member ordering, type safety, no explicit any allowed

### Style & Formatting (via @stylistic)

- ✅ **Airbnb compliance**: 531 strict rules from eslint-config-airbnb-extended
- ✅ **Code structure**: Max line length (180), object key sorting, proper spacing
- ✅ **Consistent formatting**: 2-space indentation, single quotes, trailing commas
- ✅ **Import organization**: Alphabetical ordering with framework prioritization

### Quality Assurance

- ✅ **Browser globals**: Explicit window usage for 58+ global variables
- ✅ **Modern ES features**: Arrow functions, const/let usage, template literals
- ✅ **Variable safety**: No shadowing, unused variable warnings, no undefined usage

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

MIT © [Jean-benoit Gautier](https://github.com/Jbz797)
