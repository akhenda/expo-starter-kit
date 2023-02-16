import type { PlopGeneratorConfig } from 'node-plop';

import { prettierTransform, requireField } from './utils';

const utilGenerator = {
  actions: [
    {
      path: 'src/utils/{{camelCase name}}.ts',
      templateFile: 'tools/generators/templates/util/util.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/utils/{{camelCase name}}.spec.ts',
      templateFile: 'tools/generators/templates/util/util.spec.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/utils/index.ts',
      skipIfExists: true,
      templateFile: 'tools/generators/templates/util/injectable-index.ts.hbs',
      type: 'add',
    },
    {
      path: 'src/utils/index.ts',
      pattern: '/* PLOP_INJECT_UTIL_EXPORT */',
      template: "export * from './{{camelCase name}}';",
      transform: prettierTransform,
      type: 'append',
    },
  ],
  description: 'Creates a new utility helper',
  prompts: [
    {
      message: 'Enter a name for your utility helper:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
  ],
} satisfies PlopGeneratorConfig;

export default utilGenerator;
