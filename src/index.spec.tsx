import React from 'react';
import renderer from 'react-test-renderer';

import App from '.';

jest.mock('./hooks/useOnAppStart', () => jest.fn().mockResolvedValue(true));

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
