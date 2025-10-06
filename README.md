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

This package includes **ESLint 9** and uses the new **flat configuration format** : [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

## Features

- **Angular**: Standalone components, lifecycle enforcement, component standards, and more...
- **TypeScript**: Strict typing, member ordering, modern patterns, and more...
- **Quality**: Modern JavaScript, anti-patterns prevention, performance optimization, and more...
- **Style**: Airbnb compliance, max length, import organization, and more...

## What's Included

#### ✨ **No additional ESLint installation needed!** Everything is bundled.

- <img src="https://eslint-airbnb-extended.nishargshah.dev/logo.png" width="16" height="16"> [**Airbnb Extended**](https://github.com/nishargshah/eslint-config-airbnb-extended)
- <img src="https://avatars.githubusercontent.com/u/53234240?s=48&" width="16" height="16"> [**Angular ESLint**](https://github.com/angular-eslint/angular-eslint)
- <img src="https://eslint.org/icon-512.png" width="16" height="16"> [**ESLint 9**](https://github.com/eslint/eslint)
- <img src="https://avatars.githubusercontent.com/u/144717797?s=48&" width="16" height="16"> [**Stylistic**](https://github.com/eslint-stylistic/eslint-stylistic)
- <img src="https://avatars.githubusercontent.com/u/46634674?s=48&" width="16" height="16"> [**TypeScript ESLint**](https://github.com/typescript-eslint/typescript-eslint)
- 🦄 [**Unicorn**](https://github.com/sindresorhus/eslint-plugin-unicorn)

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

## ESLint Configuration

Create an `eslint.config.js` file (ESLint 9 flat config format):

```javascript
import angularStrict from 'eslint-config-angular-strict';

export default [
  ...angularStrict,
  // Your custom overrides here
];
```

**Required**: add to your `package.json`:

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

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

MIT © [Jean-benoit Gautier](https://github.com/Jbz797)
