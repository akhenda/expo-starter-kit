import { useCallback, useLayoutEffect } from 'react';
import { Header, HeaderOptions, Layout } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = HeaderOptions & {
  /**
   * Whether the header is in a modal
   */
  modal?: boolean;

  /**
   * Layout of the screen.
   */
  layout?: Layout;

  /**
   * Title text for the header.
   */
  title: string;
};

export { useNavigationPersistence } from '@navigation/utils';

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useHeader.md)
 */
export function useHeader(headerProps: HeaderProps, deps: unknown[] = []) {
  const navigation = useNavigation();
  const HeaderComponent = useCallback(() => <Header {...headerProps} />, [headerProps]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: HeaderComponent,
      headerShown: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, navigation, HeaderComponent]);
}
