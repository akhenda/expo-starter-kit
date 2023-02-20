import type { NodePlopAPI } from 'plop';

import componentGenerator from './tools/generators/component';
import hookGenerator from './tools/generators/hook';
import navigatorGenerator from './tools/generators/navigator';
import screenGenerator from './tools/generators/screen';
import serviceGenerator from './tools/generators/service';
import storeGenerator from './tools/generators/store';
import utilGenerator from './tools/generators/util';

export default function main(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('hook', hookGenerator);
  plop.setGenerator('screen', screenGenerator);
  plop.setGenerator('util', utilGenerator);
  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('navigator', navigatorGenerator);
  plop.setGenerator('service', serviceGenerator);
}
