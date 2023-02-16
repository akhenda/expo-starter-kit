import type { PlopGeneratorConfig } from 'node-plop';

import { getPathFunc, prettierTransform, requireField } from './utils';

export type ScreenGeneratorActionData = {
  sub_directory?: string;
};

const screenGenerator = {
  actions: (data?: ScreenGeneratorActionData) => {
    if (!data) return [];

    const subPath = data.sub_directory ? `/${data.sub_directory}/` : '/';
    const path = getPathFunc('screens', subPath);

    return [
      {
        path: path('.types.ts'),
        templateFile: 'tools/generators/templates/Screen/Screen.types.ts.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.styles.tsx'),
        templateFile: 'tools/generators/templates/Screen/Screen.styles.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.tsx'),
        templateFile: 'tools/generators/templates/Screen/Screen.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.ts', 'index'),
        templateFile: 'tools/generators/templates/Screen/index.ts.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: 'src/screens/index.ts',
        skipIfExists: true,
        templateFile: 'tools/generators/templates/Screen/injectable-index.ts.hbs',
        type: 'add',
      },
      {
        path: 'src/screens/index.ts',
        pattern: '/* PLOP_INJECT_SCREEN_EXPORT */',
        template: `export * from '.${subPath}{{pascalCase name}}';`,
        transform: prettierTransform,
        type: 'append',
      },
    ];
  },
  description: 'Creates a new screen (view/page)',
  prompts: [
    {
      message: 'Enter a name for your screen:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
    {
      message: 'What sub folder should this screen stay in?',
      name: 'sub_directory',
      type: 'input',
    },
  ],
} satisfies PlopGeneratorConfig;

export default screenGenerator;
