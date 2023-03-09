import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import Color from 'color';

import { $container, $description, $image, $title, height, width } from './Slide.styles';
import type { SlideProps } from './Slide.types';

const Slide = ({ slide: { picture, color, title, description } }: SlideProps) => {
  const lighterColor = Color(color).lighten(0.8).toString();

  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={$container}>
        <Image source={picture} style={$image} />
        <View>
          <Text style={$title}>{title}</Text>
          <Text style={$description}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default Slide;
