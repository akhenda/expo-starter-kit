import type { PlopGeneratorConfig } from 'node-plop';

import { prettierTransform, requireField } from './utils';

const hookGenerator = {
  actions: [
    {
      path: 'src/hooks/use{{pascalCase name}}.ts',
      templateFile: 'tools/generators/templates/hook/useHook.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/hooks/__tests__/use{{pascalCase name}}.spec.ts',
      templateFile: 'tools/generators/templates/hook/useHook.spec.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
  ],
  description: 'Creates a new hook',
  prompts: [
    {
      message: 'Enter a name for your hook:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
  ],
} satisfies PlopGeneratorConfig;

export default hookGenerator;
