import type { ErrorInfo } from 'react';
import { Pressable, ScrollView, TextStyle, ViewStyle } from 'react-native';

import { Text, View } from '@components/Themed';
import { LabyBugIcon } from '@src/components/Icons';
import { colors, spacing } from '@src/theme';

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  onReset(): void;
}

const $contentContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  paddingHorizontal: spacing.large,
  paddingTop: spacing.extraLarge,
};

const $topSection: ViewStyle = {
  alignItems: 'center',
  flex: 1,
};

const $heading: TextStyle = {
  color: colors.light.error,
  marginBottom: spacing.medium,
};

const $errorSection: ViewStyle = {
  backgroundColor: colors.light.separator,
  borderRadius: 6,
  flex: 2,
  marginVertical: spacing.medium,
};

const $errorSectionContentContainer: ViewStyle = {
  padding: spacing.medium,
};

const $errorContent: TextStyle = {
  color: colors.light.error,
};

const $errorBacktrace: TextStyle = {
  color: colors.light.text.secondary,
  marginTop: spacing.medium,
};

const $resetButton: ViewStyle = {
  backgroundColor: colors.light.error,
  paddingHorizontal: spacing.huge,
};

export function ErrorDetails({ error, onReset, errorInfo }: ErrorDetailsProps) {
  return (
    <View style={$contentContainer}>
      <View style={$topSection}>
        <LabyBugIcon size={64} />
        <Text style={$heading}>Error Boundary Details</Text>
        <Text>Error Boundary Details</Text>
      </View>

      <ScrollView style={$errorSection} contentContainerStyle={$errorSectionContentContainer}>
        <Text style={$errorContent}>{`${error}`.trim()}</Text>
        <Text selectable style={$errorBacktrace}>
          {`${errorInfo?.componentStack}`.trim()}
        </Text>
      </ScrollView>

      <Pressable style={$resetButton} onPress={onReset}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
