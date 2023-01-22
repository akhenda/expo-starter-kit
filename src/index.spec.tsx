import React from 'react';
import renderer from 'react-test-renderer';

import Entry from '.';

jest.mock('./hooks/useOnAppStart', () => jest.fn().mockResolvedValue(true));

describe('<Entry />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Entry />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
