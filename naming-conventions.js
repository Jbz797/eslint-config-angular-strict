// Class suffix enforcement based on Angular decorator
const decoratorClassSuffixRestrictions = [
  {
    selector: 'ClassDeclaration:has(> Decorator[expression.callee.name="Injectable"]):not([id.name=/Service$/])',
    message: '@Injectable classes must end with "Service"',
  },
  {
    selector: 'ClassDeclaration:has(> Decorator[expression.callee.name="Pipe"]):not([id.name=/Pipe$/])',
    message: '@Pipe classes must end with "Pipe"',
  },
];

// Class suffix enforcement for files (used in helpers override since undecorated)
const helpersClassSuffixRestriction = {
  selector: 'ClassDeclaration[id.name!=/Helpers$/]',
  message: 'Classes in *.helpers.ts must end with "Helpers"',
};

// Files containing only imports + export const (literal values, not functions) should be named *.constant.ts
const constantsFileRestriction = {
  selector:
    'Program:has(ExportNamedDeclaration VariableDeclaration[kind="const"]):not(:has(:matches(ClassDeclaration, FunctionDeclaration, TSInterfaceDeclaration, TSEnumDeclaration, TSTypeAliasDeclaration))):not(:has(VariableDeclarator > :matches(ArrowFunctionExpression, FunctionExpression, CallExpression)))',
  message: 'Files containing only constants must be named constants/*.constant.ts',
};

// Restrictions for interface/enum/type declarations (skipped inside `declare module` blocks)
const declarationFileRestrictions = [
  { selector: 'TSEnumDeclaration:not(TSModuleBlock > TSEnumDeclaration)', message: 'Enums must live in interfaces/enums.ts or interfaces/*.enum.ts files' },
  { selector: 'TSInterfaceDeclaration:not(TSModuleBlock > TSInterfaceDeclaration)', message: 'Interfaces must live in interfaces/*.interface.ts files' },
  {
    selector: 'TSTypeAliasDeclaration:not(TSModuleBlock > TSTypeAliasDeclaration)',
    message: 'Types must live in interfaces/types.ts or interfaces/*.type.ts files',
  },
];

// Restrictions for Angular class decorators (one decorator type per file)
const decoratorFileRestrictions = {
  Component: {
    selector: 'Decorator[expression.callee.name="Component"]',
    message:
      '@Component classes must live in app.ts / components/**/*.component.ts / pages/**/*.component.ts / components/drawers/*.drawer.ts / components/modals/*.modal.ts / pages/**/*.page.ts',
  },
  Directive: { selector: 'Decorator[expression.callee.name="Directive"]', message: '@Directive classes must live in directives/*.directive.ts' },
  Injectable: { selector: 'Decorator[expression.callee.name="Injectable"]', message: '@Injectable classes must live in services/*.service.ts' },
  Pipe: { selector: 'Decorator[expression.callee.name="Pipe"]', message: '@Pipe classes must live in pipes/*.pipe.ts' },
};

// Undecorated classes must live in helpers/*.helpers.ts
const helperFileRestriction = {
  selector: 'ClassDeclaration:not(:has(Decorator))',
  message: 'Undecorated classes must live in helpers/*.helpers.ts',
};

// Angular inputs must be public (they are part of the component's external API)
const inputVisibilityRestriction = {
  selector: ':matches(PropertyDefinition[accessibility="protected"], PropertyDefinition[accessibility="private"]):has(CallExpression Identifier[name="input"])',
  message: 'Angular inputs must be public',
};

// Global no-restricted-syntax rule (used in the main TypeScript files block)
export const noRestrictedSyntaxRule = [
  'error',
  constantsFileRestriction,
  decoratorFileRestrictions.Component,
  decoratorFileRestrictions.Directive,
  decoratorFileRestrictions.Injectable,
  decoratorFileRestrictions.Pipe,
  ...decoratorClassSuffixRestrictions,
  helperFileRestriction,
  inputVisibilityRestriction,
  ...declarationFileRestrictions,
];

// Per-file overrides relaxing no-restricted-syntax to allow the relevant decorator/declaration
export const namingConventionOverrides = [
  // app.ts / components/**/*.component.ts / components/drawers/*.drawer.ts / components/modals/*.modal.ts / pages/**/*.page.ts: @Component allowed
  {
    files: [
      '**/app.ts',
      '**/components/**/*.component.ts',
      '**/pages/**/*.component.ts',
      '**/components/drawers/**/*.drawer.ts',
      '**/components/modals/**/*.modal.ts',
      '**/pages/**/*.page.ts',
    ],
    rules: {
      'no-restricted-syntax': [
        'error',
        decoratorFileRestrictions.Directive,
        decoratorFileRestrictions.Injectable,
        decoratorFileRestrictions.Pipe,
        ...decoratorClassSuffixRestrictions,
        helperFileRestriction,
        inputVisibilityRestriction,
        ...declarationFileRestrictions,
      ],
    },
  },

  // directives/*.directive.ts: @Directive allowed
  {
    files: ['**/directives/**/*.directive.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        decoratorFileRestrictions.Component,
        decoratorFileRestrictions.Injectable,
        decoratorFileRestrictions.Pipe,
        ...decoratorClassSuffixRestrictions,
        helperFileRestriction,
        inputVisibilityRestriction,
        ...declarationFileRestrictions,
      ],
    },
  },

  // pipes/*.pipe.ts: @Pipe allowed
  {
    files: ['**/pipes/**/*.pipe.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        decoratorFileRestrictions.Component,
        decoratorFileRestrictions.Directive,
        decoratorFileRestrictions.Injectable,
        ...decoratorClassSuffixRestrictions,
        helperFileRestriction,
        ...declarationFileRestrictions,
      ],
    },
  },

  // services/*.service.ts: @Injectable allowed
  {
    files: ['**/services/**/*.service.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        decoratorFileRestrictions.Component,
        decoratorFileRestrictions.Directive,
        decoratorFileRestrictions.Pipe,
        ...decoratorClassSuffixRestrictions,
        helperFileRestriction,
        ...declarationFileRestrictions,
      ],
    },
  },

  // helpers/*.helpers.ts: undecorated classes allowed, class must end with "Helpers"
  {
    files: ['**/helpers/**/*.helpers.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        helpersClassSuffixRestriction,
        decoratorFileRestrictions.Component,
        decoratorFileRestrictions.Directive,
        decoratorFileRestrictions.Injectable,
        decoratorFileRestrictions.Pipe,
        ...decoratorClassSuffixRestrictions,
        ...declarationFileRestrictions,
      ],
    },
  },

  // interfaces/*.interface.ts: only interfaces allowed
  {
    files: ['**/interfaces/**/*.interface.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, TSInterfaceDeclaration, ExportNamedDeclaration:has(> TSInterfaceDeclaration))',
          message: 'Only interfaces allowed in interfaces/*.interface.ts',
        },
      ],
    },
  },

  // interfaces/enums.ts / interfaces/*.enum.ts: only enums allowed
  {
    files: ['**/interfaces/enums.ts', '**/interfaces/**/*.enum.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, TSEnumDeclaration, ExportNamedDeclaration:has(> TSEnumDeclaration))',
          message: 'Only enums allowed in interfaces/enums.ts / interfaces/*.enum.ts',
        },
      ],
    },
  },

  // interfaces/types.ts / interfaces/*.type.ts: only type aliases allowed
  {
    files: ['**/interfaces/types.ts', '**/interfaces/**/*.type.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, TSTypeAliasDeclaration, ExportNamedDeclaration:has(> TSTypeAliasDeclaration))',
          message: 'Only type aliases allowed in interfaces/types.ts / interfaces/*.type.ts',
        },
      ],
    },
  },

  // constants/*.constant.ts: only imports + export const allowed
  {
    files: ['**/constants/**/*.constant.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in constants/*.constant.ts',
        },
      ],
    },
  },

  // guards/*.guard.ts: only imports + export const allowed (functional guards)
  {
    files: ['**/guards/**/*.guard.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in guards/*.guard.ts',
        },
      ],
    },
  },

  // interceptors/*.interceptor.ts: only imports + export const allowed (functional interceptors)
  {
    files: ['**/interceptors/**/*.interceptor.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in interceptors/*.interceptor.ts',
        },
      ],
    },
  },

  // resolvers/*.resolver.ts: only imports + export const allowed (functional resolvers)
  {
    files: ['**/resolvers/**/*.resolver.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in resolvers/*.resolver.ts',
        },
      ],
    },
  },

  // routes.ts / *.routes.ts: only imports + export const allowed (route definitions, any folder)
  {
    files: ['**/routes.ts', '**/*.routes.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in *.routes.ts',
        },
      ],
    },
  },

  // environments/*.ts: Angular environment files (only imports + export const allowed, no naming enforcement)
  {
    files: ['**/environments/*.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
          message: 'Only imports and export const allowed in environments files',
        },
      ],
    },
  },
];
