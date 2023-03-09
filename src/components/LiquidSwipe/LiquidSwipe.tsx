import { useState } from 'react';

import { images } from '@src/theme';

import { Slide, SlideProps } from './Slide';
import { Slider } from './Slider';

const slides: SlideProps['slide'][] = [
  {
    color: '#F2A1AD',
    description: 'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: images.onboarding.liquidSwipe[0],
    title: 'Dessert Recipes',
  },
  {
    color: '#0090D6',
    description: 'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture: images.onboarding.liquidSwipe[4],
    title: 'Healthy Foods',
  },
  {
    color: '#69C743',
    description: 'explore recipes by food type, preparation method, cuisine, country and more',
    picture: images.onboarding.liquidSwipe[3],
    title: 'Easy Meal Ideas',
  },
  {
    color: '#FB3A4D',
    description: 'Browse thousands of curated recipes from top chefs, each with detailled cooking instructions',
    picture: images.onboarding.liquidSwipe[1],
    title: '10000+ Recipes',
  },
  {
    color: '#F2AD62',
    description: 'Browse our best themed recipes, cooking tips, and how-to food video & photos',
    picture: images.onboarding.liquidSwipe[2],
    title: 'Video Tutorials',
  },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(0);

  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index] as SlideProps['slide']} />
    </Slider>
  );
};

export default LiquidSwipe;
