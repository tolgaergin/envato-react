import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import routes from '../routes';
import { shallow } from 'enzyme';

import App from '../containers/App';
import Settings from '../containers/Settings';
import Sales from '../containers/Sales';
import Templates from '../containers/Templates';

describe('routes', () => {
  const Root = () => (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );

  it('renders correct routes', () => {
    const wrapper = shallow(<Root />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    // Index route should be Summary
    expect(pathMap['/'])
      .toBe(App);

    // Sales route
    expect(pathMap['/sales'])
      .toBe(Sales);

    // Templates route
    expect(pathMap['/settings'])
      .toBe(Settings);

    // Templates route
    expect(pathMap['/templates'])
      .toBe(Templates);

  });
});
