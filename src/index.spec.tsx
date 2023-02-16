import React from 'react';
import renderer from 'react-test-renderer';

import Main from '.';

jest.mock('./hooks/useOnAppStart', () => jest.fn().mockResolvedValue(true));

describe('<Main />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
