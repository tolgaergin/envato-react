import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Switcher from '../components/Switcher/index';

describe('Switcher', () => {
  const checked = true;
  const name = 'switcher';
  const onChange = jest.fn();

  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <Switcher checked={checked} name={name} onChange={onChange} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('button click calls onAdd', () => {
    // manually trigger the callback
    const component = mount(
      <Switcher checked={checked} name={name} onChange={onChange} />
    );

    const container = component.find('input');
    expect(container.length).toEqual(1);

    component.find('input').simulate('change');
    expect(onChange).toBeCalled();
  });
});
