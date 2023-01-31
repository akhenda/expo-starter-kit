import type { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

export type AntDesignType = typeof AntDesign;
export type EntypoType = typeof Entypo;
export type EvilIconsType = typeof EvilIcons;
export type FeatherType = typeof Feather;
export type FontAwesomeType = typeof FontAwesome;
export type FontistoType = typeof Fontisto;
export type FoundationType = typeof Foundation;
export type IoniconsType = typeof Ionicons;
export type MaterialCommunityIconsType = typeof MaterialCommunityIcons;
export type MaterialIconsType = typeof MaterialIcons;
export type OcticonsType = typeof Octicons;
export type SimpleLineIconsType = typeof SimpleLineIcons;
export type ZocialType = typeof Zocial;

export type AntDesignGlyphMap = keyof AntDesignType['glyphMap'];
export type EntypoGlyphMap = keyof EntypoType['glyphMap'];
export type EvilIconsGlyphMap = keyof EvilIconsType['glyphMap'];
export type FeatherGlyphMap = keyof FeatherType['glyphMap'];
export type FontAwesomeGlyphMap = keyof FontAwesomeType['glyphMap'];
export type FontistoGlyphMap = keyof FontistoType['glyphMap'];
export type FoundationGlyphMap = keyof FoundationType['glyphMap'];
export type IoniconsGlyphMap = keyof IoniconsType['glyphMap'];
export type MaterialCommunityIconsGlyphMap = keyof MaterialCommunityIconsType['glyphMap'];
export type MaterialIconsGlyphMap = keyof MaterialIconsType['glyphMap'];
export type OcticonsGlyphMap = keyof OcticonsType['glyphMap'];
export type SimpleLineIconsGlyphMap = keyof SimpleLineIconsType['glyphMap'];
export type ZocialGlyphMap = keyof ZocialType['glyphMap'];

export enum IconType {
  ANT = 'AntDesign',
  ENTYPO = 'Entypo',
  EVIL = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  IONICONS = 'Ionicons',
  MATERIAL_COMMUNITY = 'MaterialCommunityIcons',
  MATERIAL = 'MaterialIcons',
  OCTICONS = 'Octicons',
  FONTISTO = 'Fontisto',
  FOUNDATION = 'Foundation',
  SIMPLE_LINE = 'SimpleLineIcons',
  ZOCIAL = 'Zocial',
}

export type IconFamily = `${IconType}`;

export type IconElements = {
  [IconType.ANT]: AntDesignType;
  [IconType.ENTYPO]: EntypoType;
  [IconType.EVIL]: EvilIconsType;
  [IconType.FEATHER]: FeatherType;
  [IconType.FONT_AWESOME]: FontAwesomeType;
  [IconType.FONTISTO]: FontistoType;
  [IconType.FOUNDATION]: FoundationType;
  [IconType.IONICONS]: IoniconsType;
  [IconType.MATERIAL_COMMUNITY]: MaterialCommunityIconsType;
  [IconType.MATERIAL]: MaterialIconsType;
  [IconType.OCTICONS]: OcticonsType;
  [IconType.SIMPLE_LINE]: SimpleLineIconsType;
  [IconType.ZOCIAL]: ZocialType;
};

// export type GlyphMaps = {
//   [Property in keyof IconElements]: keyof IconElements[Property]['glyphMap'];
// };

export type GlyphMaps = {
  [IconType.ANT]: AntDesignGlyphMap;
  [IconType.ENTYPO]: EntypoGlyphMap;
  [IconType.EVIL]: EvilIconsGlyphMap;
  [IconType.FEATHER]: FeatherGlyphMap;
  [IconType.FONT_AWESOME]: FontAwesomeGlyphMap;
  [IconType.FONTISTO]: FontistoGlyphMap;
  [IconType.FOUNDATION]: FoundationGlyphMap;
  [IconType.IONICONS]: IoniconsGlyphMap;
  [IconType.MATERIAL_COMMUNITY]: MaterialCommunityIconsGlyphMap;
  [IconType.MATERIAL]: MaterialIconsGlyphMap;
  [IconType.OCTICONS]: OcticonsGlyphMap;
  [IconType.SIMPLE_LINE]: SimpleLineIconsGlyphMap;
  [IconType.ZOCIAL]: ZocialGlyphMap;
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export interface IconProps<T> {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: GlyphMaps[T extends IconType ? T : IconType.IONICONS];

  /**
   * Color of the icon
   */
  color?: string | OpaqueColorValue;

  /**
   * The Icon font family to use.
   *
   * Import IconType enum and use it here
   */
  family: T;

  /**
   * Custom styles for the icon
   */
  style?: StyleProp<TextStyle>;

  marginLeft?: number;
  marginRight?: number;

  /**
   * Is this an Icon Button
   */
  isButton?: boolean;

  buttonStyle?: TextStyle | ViewStyle;

  onButtonPress?: () => void;
}
