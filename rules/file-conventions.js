// Files containing only imports + export const (literal values, not functions) should be named *.constant.ts
const constantsFileRestriction = {
  message: 'Files containing only constants must be named constants/*.constant.ts',
  selector: [
    'Program:has(ExportNamedDeclaration VariableDeclaration[kind="const"])',
    ':not(:has(:matches(ClassDeclaration, FunctionDeclaration, TSInterfaceDeclaration, TSEnumDeclaration, TSTypeAliasDeclaration)))',
    ':not(:has(VariableDeclarator > :matches(ArrowFunctionExpression, FunctionExpression, CallExpression)))',
  ].join(''),
};

// Restrictions for interface/enum/type declarations (skipped inside `declare module` blocks)
const declarationFileRestrictions = [
  { message: 'Enums must live in interfaces/enums.ts or interfaces/*.enum.ts files', selector: 'TSEnumDeclaration:not(TSModuleBlock > TSEnumDeclaration)' },
  { message: 'Interfaces must live in interfaces/*.interface.ts files', selector: 'TSInterfaceDeclaration:not(TSModuleBlock > TSInterfaceDeclaration)' },
  {
    message: 'Types must live in interfaces/types.ts or interfaces/*.type.ts files',
    selector: 'TSTypeAliasDeclaration:not(TSModuleBlock > TSTypeAliasDeclaration)',
  },
];

// Class suffix enforcement based on Angular decorator (@Service is Angular 22's shorthand for @Injectable({ providedIn: 'root' }))
const decoratorClassSuffixRestrictions = [
  {
    message: '@Injectable / @Service classes must end with "Service"',
    selector: 'ClassDeclaration:has(> Decorator[expression.callee.name=/^(Injectable|Service)$/]):not([id.name=/Service$/])',
  },
  {
    message: '@Pipe classes must end with "Pipe"',
    selector: 'ClassDeclaration:has(> Decorator[expression.callee.name="Pipe"]):not([id.name=/Pipe$/])',
  },
];

// Restrictions for Angular class decorators (one decorator type per file)
const decoratorFileRestrictions = {
  Component: {
    message: [
      '@Component classes must live in app.ts / components/**/*.component.ts / pages/**/*.component.ts',
      'components/drawers/*.drawer.ts / components/modals/*.modal.ts / pages/**/*.page.ts',
    ].join(' / '),
    selector: 'Decorator[expression.callee.name="Component"]',
  },
  Directive: { message: '@Directive classes must live in directives/*.directive.ts', selector: 'Decorator[expression.callee.name="Directive"]' },
  Injectable: {
    message: '@Injectable / @Service classes must live in services/*.service.ts',
    selector: 'Decorator[expression.callee.name=/^(Injectable|Service)$/]',
  },
  Pipe: { message: '@Pipe classes must live in pipes/*.pipe.ts', selector: 'Decorator[expression.callee.name="Pipe"]' },
};

// Undecorated classes must live in helpers/*.helpers.ts
const helperFileRestriction = {
  message: 'Undecorated classes must live in helpers/*.helpers.ts',
  selector: 'ClassDeclaration:not(:has(Decorator))',
};

// Class suffix enforcement for files (used in helpers override since undecorated)
const helpersClassSuffixRestriction = {
  message: 'Classes in *.helpers.ts must end with "Helpers"',
  selector: 'ClassDeclaration[id.name!=/Helpers$/]',
};

// Everything in *.helpers.ts belongs to the class — no module-level constants, functions or state
const helpersFileRestrictions = [
  {
    message: 'Only imports and the class allowed in *.helpers.ts — use static properties for constants and static methods for logic',
    selector: 'Program > :not(ImportDeclaration, ClassDeclaration, ExportNamedDeclaration:has(> ClassDeclaration))',
  },
  {
    message: 'Use a static method or an arrow property in *.helpers.ts, not a function expression',
    selector: 'PropertyDefinition > FunctionExpression',
  },
];

// Angular inputs must be public (they are part of the component's external API)
const inputVisibilityRestriction = {
  message: 'Angular inputs must be public',
  selector: ':matches(PropertyDefinition[accessibility="protected"], PropertyDefinition[accessibility="private"]):has(CallExpression Identifier[name="input"])',
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
export const noRestrictedSyntaxOverrides = [
  // app.ts / components|pages/**/*.component.ts / components/drawers/*.drawer.ts / components/modals/*.modal.ts / pages/**/*.page.ts: @Component allowed
  {
    files: [
      '**/app.ts',
      '**/components/**/*.component.ts',
      '**/components/drawers/**/*.drawer.ts',
      '**/components/modals/**/*.modal.ts',
      '**/pages/**/*.component.ts',
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

  // helpers/*.helpers.ts: undecorated classes allowed, class must end with "Helpers", nothing else at module level
  {
    files: ['**/helpers/**/*.helpers.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        helpersClassSuffixRestriction,
        ...helpersFileRestrictions,
        decoratorFileRestrictions.Component,
        decoratorFileRestrictions.Directive,
        decoratorFileRestrictions.Injectable,
        decoratorFileRestrictions.Pipe,
        ...decoratorClassSuffixRestrictions,
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
          message: 'Only interfaces allowed in interfaces/*.interface.ts',
          selector: 'Program > :not(ImportDeclaration, TSInterfaceDeclaration, ExportNamedDeclaration:has(> TSInterfaceDeclaration))',
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
          message: 'Only enums allowed in interfaces/enums.ts / interfaces/*.enum.ts',
          selector: 'Program > :not(ImportDeclaration, TSEnumDeclaration, ExportNamedDeclaration:has(> TSEnumDeclaration))',
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
          message: 'Only type aliases allowed in interfaces/types.ts / interfaces/*.type.ts',
          selector: 'Program > :not(ImportDeclaration, TSTypeAliasDeclaration, ExportNamedDeclaration:has(> TSTypeAliasDeclaration))',
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
          message: 'Only imports and export const allowed in constants/*.constant.ts',
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
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
          message: 'Only imports and export const allowed in guards/*.guard.ts',
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
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
          message: 'Only imports and export const allowed in interceptors/*.interceptor.ts',
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
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
          message: 'Only imports and export const allowed in resolvers/*.resolver.ts',
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
        },
      ],
    },
  },

  // routes.ts / *.routes.ts: only imports + const declarations allowed (routes + colocated resolvers/guards as local const)
  {
    files: ['**/routes.ts', '**/*.routes.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          message: 'Only imports and const declarations allowed in *.routes.ts',
          selector: 'Program > :not(ImportDeclaration, VariableDeclaration[kind="const"], ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
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
          message: 'Only imports and export const allowed in environments files',
          selector: 'Program > :not(ImportDeclaration, ExportNamedDeclaration:has(> VariableDeclaration[kind="const"]))',
        },
      ],
    },
  },
];
