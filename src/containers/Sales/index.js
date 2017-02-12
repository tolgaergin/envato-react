import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getSales } from '../../store/Sales/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import SalesList from '../../components/SalesList';

class Sales extends Component {

  componentDidMount() {
    this.props.dispatch(getSales());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  render() {
    return (
      <SalesList
        isFetching={this.props.isFetching}
        sales={this.props.salesList}
        />
    );
  }
};

const mapStateToProps = state => {
  const { sales } = state;
  return {
    isFetching: sales.isFetching,
    salesList: sales.data,
  };
};

export default connect(mapStateToProps)(Sales);
