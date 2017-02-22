import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SalesList from '../components/SalesList/index';

describe('SalesList', () => {
  it('renders and matches snapshot', () => {
    const isFetching = false;
    const sales = [
      {
        detail: 'Pleasure Template',
        price: 20,
        date: '2017-02-16 00:34:36 +1100',
      },
    ];

    const component = renderer.create(
      <SalesList isFetching={isFetching} sales={sales} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
