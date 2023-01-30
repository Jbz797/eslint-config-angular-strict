# eslint-config-angular-strict

Stricts rules to enforce a consistent code style for **Angular** development

## Installation

ℹ️ `eslint` dependencies are included, so you can remove all `eslint` related dependencies from your project.

```sh
npm install eslint-config-angular-strict --save-dev
```

or

```sh
yarn add eslint-config-angular-strict --dev
```

## Configure ESLint

Within your **ESLint** config file:

```javascript
{
  "root": true,
  "overrides": [
    {
      "extends": ["angular-strict/typescript"],
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["./tsconfig.json"] // Specify your tsconfig relative path
      }
    },
    {
      "extends": ["angular-strict/template"],
      "files": ["*.html"]
    }
  ]
}
```

## Configuring Eslint for Typescript only projects

Within your **ESLint** config file:

```javascript
{
  "root": true,
  "overrides": [
    {
      "extends": ["angular-strict/typescript"],
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["./tsconfig.json"] // Specify your tsconfig relative path
      }
    }
  ]
}
```

## Tsconfig

For better consistency, please add this options to your `tsconfig.json`:

```javascript
{
  "compilerOptions": {
    (...),
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

## Extends

- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [airbnb](https://github.com/airbnb/javascript)
