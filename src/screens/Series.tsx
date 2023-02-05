import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';
import isEqual from 'lodash/isEqual';

import { PaletteIcon } from '@src/components/Icons';
import { actions, useTrackedStore } from '@src/stores';

type ButtonProps = {
  label?: string;
  round?: boolean;
};

const labelButton = { label: 'Change Theme' };
const iconButton = { round: true };

const Series = () => {
  const theme = useTrackedStore().app.theme();
  const [buttonProps, setButtonProps] = useState<ButtonProps>(labelButton);

  const onChangeTheme = () => {
    if (isEqual(buttonProps, labelButton)) setButtonProps(iconButton);
    if (isEqual(buttonProps, iconButton)) setButtonProps(labelButton);

    actions.app.changeTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ScrollView>
      <View flex padding-15>
        <Text h1 text>
          H1 Heading
        </Text>
        <Text h2 secondary>
          H2 Heading
        </Text>
        <Text h3 success>
          H3 Heading
        </Text>
        <Text h4 warning>
          H4 Heading
        </Text>
        <Text h5 info>
          H5 Heading
        </Text>
        <Text h6 error>
          H6 Heading
        </Text>
        <Text caption>Caption</Text>
        <Text overline>Overline</Text>
        <Text subtitle>Subtitle</Text>
        <Text subtitle2>Subtitle 2</Text>
        <Text body>Body</Text>
        <Text body2>Body 2</Text>
        <Text p>Series Heading</Text>
        <Button
          onPress={onChangeTheme}
          marginT-15
          bg-primary
          enableShadow
          iconSource={PaletteIcon}
          animateLayout
          iconOnRight
          animateTo="right"
          {...buttonProps}
        />
      </View>
    </ScrollView>
  );
};

export default Series;
