import { Dimensions, PixelRatio, Platform } from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

type DeviceSize = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'unknown' | 'default';

export function getDeviceSize(): DeviceSize {
  if (Platform.OS === 'ios') {
    // iPhone 4 spec
    if ((width <= 320 && height <= 480) || (width <= 480 && height <= 320)) return 'xsmall';

    // iPhone 5 spec
    if ((width <= 320 && height <= 568) || (width <= 568 && height <= 320)) return 'small';

    // iPhone 6 spec
    if ((width <= 375 && height <= 667) || (width <= 667 && height <= 375)) return 'normal';

    // iPhone 6 plus spec
    if ((width <= 414 && height <= 736) || (width <= 736 && height <= 414)) return 'large';

    // greater then iPhone 6 plus, such as tablets
    return 'xlarge';
  }

  if (Platform.OS === 'android') {
    // size spec from: https://developer.android.com/guide/practices/screens_support.html
    // xlarge screens are at least 960dp x 720dp
    // large screens are at least 640dp x 480dp
    // normal screens are at least 470dp x 320dp
    // small screens are at least 426dp x 320dp

    if ((width >= 960 && height >= 720) || (width >= 720 && width >= 960)) return 'xlarge';
    if ((width >= 640 && height >= 480) || (width >= 480 && height >= 640)) return 'large';
    if ((width >= 470 && height >= 320) || (width >= 320 && height >= 470)) return 'normal';
    if ((width >= 426 && height >= 320) || (width >= 320 && height >= 426)) return 'small';

    return 'xsmall';
  }

  return 'unknown';
}

export function selectDevice<T>(selection: { [size in DeviceSize]?: T } & { default: T }) {
  const size = getDeviceSize();
  const attr = selection[size];

  return attr || selection.default;
}

/**
 * A responsive font size helper adapted from https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
 *
 * @param size The size unit in pixels
 */
export function rfs(size: number) {
  const scale = width / 350;
  const newSize = size * scale;

  if (Platform.OS === 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize));

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

/**
 * Global application metrics
 */
const metrics = {
  containerPadding: 15,
  deviceSize: getDeviceSize(),
  getStatusBarHeight,
  height: width < height ? height : width,
  ifIphoneX,
  isIphoneX: ifIphoneX,
  rfs,
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,
  selectDevice,

  statusBarHeight: getStatusBarHeight(),
  tabBarHeight: 64,
  width: width < height ? width : height,
};

export default metrics;
