import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getSales } from '../../store/Sales/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../Loading';

class Sales extends Component {
  constructor() {
    super();

    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getSales());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  renderListItem(key) {
    const item = this.props.sales.data[key];
    return (
      <li key={key}>
        {item.date} {item.price}
      </li>
    );
  }

  render() {

    const sales = this.props.sales;

    if (sales.isFetching) {
      return <div className="child"><Loading /></div>;
    }

    return (
      <div className="child">
        <h2>Sales</h2>
        <ul>
          {Object.keys(sales.data).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { sales } = state;
  return {
    sales,
  };
};

export default connect(mapStateToProps)(Sales);
