/* eslint-disable import/no-extraneous-dependencies */
import { Linter } from 'eslint';
import prettier from 'prettier';

import eslintConfig from '../../../.eslintrc';
import config from '../../../.prettierrc';

const linter = new Linter();

export const prettierTransform = (text: string) => {
  const prettierFormatted = prettier.format(text, {
    ...(config as Record<string, unknown>),
    parser: 'babel-ts',
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { output } = linter.verifyAndFix(prettierFormatted, eslintConfig);

  return output;
};
