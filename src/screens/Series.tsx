import { useState } from 'react';
import { ScrollView } from 'react-native';
import Button from 'react-native-ui-lib/button';
import Text from 'react-native-ui-lib/text';
import TextField from 'react-native-ui-lib/textField';
import View from 'react-native-ui-lib/view';
import isEqual from 'lodash/isEqual';

import { SafeAreaView, SaveAreaInset } from '@src/components';
import { PaletteIcon } from '@src/components/Icons';
import logger from '@src/services/logger';
import { actions, useTrackedStore } from '@src/stores';

type ButtonProps = {
  label?: string;
  round?: boolean;
};

const labelButton = { label: 'Change Theme' };
const iconButton = { round: true };

const Series = () => {
  const theme = useTrackedStore().app.theme();
  const [email, setEmail] = useState('');
  const [buttonProps, setButtonProps] = useState<ButtonProps>(labelButton);

  const onChangeTheme = () => {
    if (isEqual(buttonProps, labelButton)) setButtonProps(iconButton);
    if (isEqual(buttonProps, iconButton)) setButtonProps(labelButton);

    actions.app.changeTheme(theme === 'dark' ? 'light' : 'dark');

    logger.info('Changing theme in Series');
  };

  const text = 'Series';

  return (
    <SafeAreaView insets={SaveAreaInset.BOTTOM}>
      <ScrollView>
        <View flex padding-15>
          <Text h1 text>
            H1 {text}
          </Text>
          <Text h2 secondary>
            H2 {text}
          </Text>
          <Text h3 success>
            H3 {text}
          </Text>
          <Text h4 warning>
            H4 {text}
          </Text>
          <Text h5 info>
            H5 {text}
          </Text>
          <Text h6 error>
            H6 {text}
          </Text>
          <Text caption>Caption</Text>
          <Text overline>Overline</Text>
          <Text subtitle>Subtitle</Text>
          <Text subtitle2>Subtitle 2</Text>
          <Text body>Body</Text>
          <Text testID="email" body2>
            {email}
          </Text>
          <Text testID="theme" p>
            {theme}
          </Text>
          <TextField
            placeholder="Placeholder"
            onChangeText={setEmail}
            enableErrors
            validate={['required', 'email', (value: string) => value.length > 6]}
            validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
            showCharCounter
            maxLength={30}
          />
          <Button
            testID="button"
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
    </SafeAreaView>
  );
};

export default Series;
