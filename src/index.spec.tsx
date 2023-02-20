import { cleanup, render, screen } from '@testing-library/react-native';

import Main from '.';

jest.mock('expo-status-bar');
jest.mock('@nandorojo/swr-firestore');
jest.mock('./navigation');
jest.mock('./services/firebase/config', () => {
  return {
    fuego: {},
  };
});

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

afterEach(cleanup);

afterAll(() => {
  jest.clearAllMocks();
});

it('renders correctly', async () => {
  render(<Main />);

  expect(screen.toJSON()).toMatchSnapshot();
});
