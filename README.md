# angular-strict-eslint-rules

Stricts rules to enforce a consistent code style for **Angular** development

## Tsconfig

For better consistency, please add this options to your `tsconfig.json` :

```javascript
{
  "compilerOptions": {
    "forceConsistentCasingInFileNames": true, // Ensure that casing is correct in imports
    "noImplicitAny": true, // Enable error reporting for expressions and declarations with an implied any type
    "noImplicitOverride": true, // Ensure overriding members in derived classes are marked with an override modifier
    "strict": true // Enable all strict type checking options
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true, // Reports an error for a supplied parameter whose injection type cannot be determined
    "strictInputAccessModifiers": true, // Whether access modifiers such as private/protected/readonly are honored when assigning a binding expression to an @Input()
    "strictTemplates": true // Enables strict template type checking
  }
}
```

## Installation

```sh
npm install angular-strict-eslint-rules --save-dev
```

or

```sh
yarn add angular-strict-eslint-rules --dev
```

## Usage

In `.eslintec.json`:

```json
{
  "extends": ["angular-strict-eslint-rules"]
}
```

ℹ️ All `eslint` dependencies are included, so you can remove all `eslint` related dependencies from your project.

## Extends

- [airbnb](https://github.com/airbnb/javascript)
- [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
