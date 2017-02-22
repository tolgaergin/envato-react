import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Loading from '../components/Loading/index';

describe('Loading', () => {
  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <Loading />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
