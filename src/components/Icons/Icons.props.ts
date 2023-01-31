import type { Icon, IconProps, IconType } from '@src/components';

export type IconElement = typeof Icon;

export type IoniconsIconProps = Omit<IconProps<IconType.IONICONS>, 'name' | 'family'>;
export type FeatherIconProps = Omit<IconProps<IconType.FEATHER>, 'name' | 'family'>;
export type OcticonsIconProps = Omit<IconProps<IconType.OCTICONS>, 'name' | 'family'>;
export type MaterialIconsIconProps = Omit<IconProps<IconType.MATERIAL>, 'name' | 'family'>;
