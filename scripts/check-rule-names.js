import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import importXPlugin from 'eslint-plugin-import-x';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';
import { readFileSync } from 'node:fs';

// ESLint ignores unknown rule names: a rule renamed upstream voids our 'off' and returns enabled by `all`. Deprecation warns first, a missing name is too late
const PLUGINS = {
  '@angular-eslint': angularEslintPlugin,
  '@angular-eslint/template': angularTemplatePlugin,
  '@stylistic': stylistic,
  '@typescript-eslint': tsEslintPlugin,
  'import-x': importXPlugin,
  perfectionist: perfectionistPlugin,
  unicorn: unicornPlugin,
};

const GREEN = '[32m';
const RED = '[31m';
const RESET = '[0m';
const ROOT = new URL('../', import.meta.url);
const SOURCES = ['index.js', 'rules/file-conventions.js'];
const YELLOW = '[33m';

// Collect every quoted 'prefix/rule' used as an object key, i.e. followed by a colon, and whether any of its entries enables it
const collectRuleKeys = source => {
  const keys = new Map();
  for (const [, key, value] of source.matchAll(/'([^']*\/[^']*)'\s*:\s*(\S*)/g)) keys.set(key, keys.get(key) || !/^\[?'off'/.test(value));
  return keys;
};

// Split on the last slash so nested prefixes like '@angular-eslint/template' resolve correctly
const splitRuleKey = key => {
  const index = key.lastIndexOf('/');
  return { prefix: key.slice(0, index), rule: key.slice(index + 1) };
};

const deprecationMessage = meta => {
  const info = meta?.deprecated;
  if (!info) return null;
  return typeof info === 'object' ? (info.message ?? 'deprecated') : 'deprecated';
};

const missing = [];
const deprecated = [];
let checked = 0;

for (const file of SOURCES) {
  for (const [key, isEnabled] of collectRuleKeys(readFileSync(new URL(file, ROOT), 'utf8'))) {
    if (key in PLUGINS) continue; // plugin registration, not a rule
    const { prefix, rule } = splitRuleKey(key);
    const plugin = PLUGINS[prefix];
    if (!plugin) continue;
    checked += 1;
    const definition = plugin.rules[rule];
    if (!definition) missing.push({ file, key });
    else {
      const message = deprecationMessage(definition.meta);
      if (message && isEnabled) deprecated.push({ file, key, message });
    }
  }
}

if (missing.length > 0) {
  console.error(`${RED}✖ ${missing.length} rule name(s) no longer exist — the entry silently does nothing:${RESET}\n`);
  for (const { file, key } of missing) console.error(`  ${file}  ${RED}${key}${RESET}`);
  console.error('');
}

// Warn only, and only for rules we enable: a deprecated rule still works, and turning it off is the migration itself
if (deprecated.length > 0) {
  console.warn(`${YELLOW}⚠ ${deprecated.length} rule name(s) deprecated upstream — plan the migration:${RESET}\n`);
  for (const { file, key, message } of deprecated) console.warn(`  ${file}  ${YELLOW}${key}${RESET}\n      ${message}`);
  console.warn('');
}

if (missing.length > 0) process.exit(1);

console.log(`${GREEN}✔${RESET} ${checked} plugin rule names verified, none missing`);
