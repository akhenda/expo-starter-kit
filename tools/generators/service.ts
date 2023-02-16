import type { PlopGeneratorConfig } from 'node-plop';

import { prettierTransform, requireField } from './utils';

const serviceGenerator = {
  actions: [
    {
      path: 'src/services/{{pascalCase name}}.ts',
      templateFile: 'tools/generators/templates/Service/Service.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/services/{{pascalCase name}}.spec.ts',
      templateFile: 'tools/generators/templates/Service/Service.spec.ts.hbs',
      transform: prettierTransform,
      type: 'add',
    },
    {
      path: 'src/services/index.ts',
      skipIfExists: true,
      templateFile: 'tools/generators/templates/Service/injectable-index.ts.hbs',
      type: 'add',
    },
    {
      path: 'src/services/index.ts',
      pattern: '/* PLOP_INJECT_SERVICE_EXPORT */',
      template: "export { default as {{camelCase name}}Service } from './{{pascalCase name}}';",
      transform: prettierTransform,
      type: 'append',
    },
  ],
  description: 'Creates a new service',
  prompts: [
    {
      message: 'Enter a name for your service:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
  ],
} satisfies PlopGeneratorConfig;

export default serviceGenerator;
