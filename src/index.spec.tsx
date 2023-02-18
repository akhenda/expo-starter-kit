import renderer from 'react-test-renderer';

import Main from '.';

jest.mock('./hooks/useOnAppStart', () =>
  jest.fn(() => ({
    appIsReady: true,
    initialNavigationState: {},
    navTheme: {},
    onLayoutRootView: jest.fn(),
    onNavigationStateChange: jest.fn(),
    statusBarBGColor: 'light',
    statusBarStyle: 'auto',
  })),
);

describe('<Main />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
