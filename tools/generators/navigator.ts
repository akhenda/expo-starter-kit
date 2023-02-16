import type { PlopGeneratorConfig } from 'node-plop';

import { prettierTransform, requireField } from './utils';

export type NavigatorGeneratorActionData = {
  type?: 'Stack' | 'Drawer' | 'Tab';
};

const navigatorGenerator = {
  actions: (data?: NavigatorGeneratorActionData) => {
    if (!data) return [];

    return [
      {
        path: 'src/navigation/navigators/{{pascalCase name}}Navigator/{{pascalCase name}}Navigator.types.ts',
        templateFile: `tools/generators/templates/Navigator/${data.type}Navigator/${data.type}Navigator.types.ts.hbs`,
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: 'src/navigation/navigators/{{pascalCase name}}Navigator/{{pascalCase name}}Navigator.tsx',
        templateFile: `tools/generators/templates/Navigator/${data.type}Navigator/${data.type}Navigator.tsx.hbs`,
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: 'src/navigation/navigators/{{pascalCase name}}Navigator/index.ts',
        templateFile: `tools/generators/templates/Navigator/${data.type}Navigator/index.ts.hbs`,
        transform: prettierTransform,
        type: 'add',
      },
    ];
  },
  description: 'Creates a new navigator',
  prompts: [
    {
      message: 'Enter a name for your navigator:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
    {
      choices: ['Stack', 'Drawer', 'Tab'],
      name: 'type',
      type: 'list',
    },
  ],
} satisfies PlopGeneratorConfig;

export default navigatorGenerator;
