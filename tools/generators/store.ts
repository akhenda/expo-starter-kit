import type { PlopGeneratorConfig } from 'node-plop';

import { prettierTransform, requireField } from './utils';

const storeGenerator = {
  actions: [
    {
      path: 'src/stores/{{camelCase name}}.ts',
      templateFile: 'tools/generators/templates/store/store.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/stores/{{camelCase name}}.spec.ts',
      templateFile: 'tools/generators/templates/store/store.spec.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/stores/index.ts',
      skipIfExists: true,
      templateFile: 'tools/generators/templates/store/injectable-index.ts.hbs',
      type: 'add',
    },
    {
      path: 'src/stores/index.ts',
      pattern: '/* PLOP_INJECT_STORE_IMPORT */',
      template: "import { {{camelCase name}}Store } from './{{camelCase name}}';",
      transform: prettierTransform,
      type: 'append',
    },
    {
      path: 'src/stores/index.ts',
      pattern: '/* PLOP_INJECT_STORE */',
      template: '  {{camelCase name}}: {{camelCase name}}Store,',
      transform: prettierTransform,
      type: 'append',
    },
  ],
  description: 'Creates a new Zustand store',
  prompts: [
    {
      message: 'Enter a name for your Zustand store:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
  ],
} satisfies PlopGeneratorConfig;

export default storeGenerator;
