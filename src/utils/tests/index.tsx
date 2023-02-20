import type { JSXElementConstructor, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react-native';

import useTheme from '@src/hooks/useTheme';

type AllTheProvidersProps = {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  useTheme();

  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { height: 0, width: 0, x: 0, y: 0 },
        insets: { bottom: 0, left: 0, right: 0, top: 0 },
      }}
    >
      {children}
    </SafeAreaProvider>
  );
};

const customRender = (ui: ReactElement<unknown, string | JSXElementConstructor<unknown>>, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native'; // eslint-disable-line import/no-extraneous-dependencies

// override React Testing Library's render with our own
export { customRender as render };

export const useNavigationMock = useNavigation as jest.MockedFunction<typeof useNavigation>;
