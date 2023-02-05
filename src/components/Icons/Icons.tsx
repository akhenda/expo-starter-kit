import { Icon, IconType } from '@src/components';

import type { FeatherIconProps, IoniconsIconProps, MaterialIconsIconProps, OcticonsIconProps } from './Icons.props';

export const BackIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="arrow-left" {...props} />;
export const HomeIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="home" {...props} />;
export const InfoIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="info" {...props} />;
export const InfoIconBtn = (props: FeatherIconProps) => (
  <Icon isButton family={IconType.FEATHER} name="info" {...props} />
);
export const BellIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="bell" {...props} />;
export const PersonIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="user" {...props} />;
export const ActivityIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="activity" {...props} />;
export const SettingsIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="sliders" {...props} />;
export const CPUIcon = (props: FeatherIconProps) => <Icon family={IconType.FEATHER} name="cpu" {...props} />;
export const TVIcon = (props: IoniconsIconProps) => <Icon family={IconType.IONICONS} name="tv-outline" {...props} />;
export const LabyBugIcon = (props: IoniconsIconProps) => <Icon family={IconType.IONICONS} name="bug" {...props} />;
export const StarIcon = (props: OcticonsIconProps) => <Icon family={IconType.OCTICONS} name="star" {...props} />;
export const MobileIcon = (props: OcticonsIconProps) => (
  <Icon family={IconType.OCTICONS} name="device-mobile" {...props} />
);

export const CarIcon = (props: IoniconsIconProps) => (
  <Icon family={IconType.IONICONS} name="car-sport-outline" {...props} />
);

export const PhoneIcon = (props: IoniconsIconProps) => (
  <Icon family={IconType.IONICONS} name="phone-portrait-outline" {...props} />
);
export const MoviesIcon = (props: MaterialIconsIconProps) => (
  <Icon family={IconType.MATERIAL} name="local-movies" {...props} />
);
export const PaletteIcon = (props: IoniconsIconProps) => (
  <Icon family={IconType.IONICONS} name="color-palette" {...props} />
);

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default {
  ActivityIcon,
  BackIcon,
  BellIcon,
  CPUIcon,
  CarIcon,
  HomeIcon,
  LabyBugIcon,
  MobileIcon,
  MoviesIcon,
  PaletteIcon,
  PersonIcon,
  PhoneIcon,
  SettingsIcon,
  StarIcon,
  TVIcon,
};
