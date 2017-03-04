import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSales, salesShouldFetch } from '../../store/Sales/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import SalesList from '../../components/SalesList';

import InformationPage from '../../components/InformationPage';
import emptyError from '../../assets/svg/empty-error.svg';

class Sales extends Component {

  componentDidMount() {
    this.props.getSales();
    this.props.updatePrevPath(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shouldFetch !== nextProps.shouldFetch) {
      this.props.getSales();
    }
  }

  render() {
    const {
      isFetching,
      error,
      salesList,
      salesShouldFetch,
    } = this.props;

    if (error) {
      return (
        <InformationPage
          image={emptyError}
          text="While getting your data there was an error"
          buttonText="Try to get data again"
          buttonClick={salesShouldFetch.bind(this)}
        />
      );
    }

    return (
      <SalesList
        isFetching={isFetching}
        sales={salesList}
      />
    );
  }
};

const mapStateToProps = state => {
  const { sales } = state;
  return {
    isFetching: sales.isFetching,
    salesList: sales.data,
    shouldFetch: sales.shouldFetch,
    error: sales.error,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSales,
    salesShouldFetch,
    updatePrevPath,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
