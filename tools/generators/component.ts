import type { PlopGeneratorConfig } from 'node-plop';

import { getPathFunc, prettierTransform, requireField } from './utils';

export type ComponentGeneratorActionData = {
  sub_directory?: string;
  generate_story?: boolean;
};

const componentGenerator = {
  actions: (data?: ComponentGeneratorActionData) => {
    if (!data) return [];

    const subPath = data.sub_directory ? `/${data.sub_directory}/` : '/';
    const path = getPathFunc('components', subPath);

    const actions = [
      {
        path: path('.types.ts'),
        templateFile: 'tools/generators/templates/Component/Component.types.ts.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.styles.tsx'),
        templateFile: 'tools/generators/templates/Component/Component.styles.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.tsx'),
        templateFile: 'tools/generators/templates/Component/Component.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: path('.spec.tsx'),
        templateFile: 'tools/generators/templates/Component/Component.spec.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      },

      {
        path: path('.ts', 'index'),
        templateFile: 'tools/generators/templates/Component/index.ts.hbs',
        transform: prettierTransform,
        type: 'add',
      },
      {
        path: 'src/components/index.ts',
        skipIfExists: true,
        templateFile: 'tools/generators/templates/Component/injectable-index.ts.hbs',
        type: 'add',
      },
      {
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_COMPONENT_EXPORT */',
        template: `export * from '.${subPath}{{pascalCase name}}';`,
        transform: prettierTransform,
        type: 'append',
      },
    ];

    if (data.generate_story) {
      actions.push({
        path: path('.stories.tsx'),
        templateFile: 'tools/generators/templates/Component/Component.stories.tsx.hbs',
        transform: prettierTransform,
        type: 'add',
      });
    }

    return actions;
  },
  description: 'Creates a new component',
  prompts: [
    {
      message: 'Enter a name for your component:',
      name: 'name',
      type: 'input',
      validate: requireField('name'),
    },
    {
      default: false,
      message: 'Do you want to generate a story?',
      name: 'generate_story',
      type: 'confirm',
    },
    {
      message: 'What sub folder should this component stay in?',
      name: 'sub_directory',
      type: 'input',
    },
  ],
} satisfies PlopGeneratorConfig;

export default componentGenerator;
