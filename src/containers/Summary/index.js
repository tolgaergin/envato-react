import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUser,
  hideNewSalesBadge,
  hideNewFollowersBadge,
  userShouldFetch } from '../../store/Summary/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../../components/Loading';
import CurrentBalance from '../../components/CurrentBalance';
import MonthlyChart from '../Chart';
import EmptyChart from '../../components/Chart/EmptyChart';
import InfoBoxes from '../../components/InfoBoxes';

import InformationPage from '../../components/InformationPage';
import emptyError from '../../assets/svg/empty-error.svg';

class Summary extends Component {

  componentDidMount() {
    this.props.getUser();
    this.props.updatePrevPath(this.props.location.pathname);
  }

  componentWillUnmount() {
    this.props.hideNewFollowersBadge(this.props.followers);
    this.props.hideNewSalesBadge(this.props.sales);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shouldFetchUser !== nextProps.shouldFetchUser) {
      this.props.getUser();
    }
  }

  render() {
    const {
      isFetchingUser,
      isFetchingUserAccount,
      isFetchingUserEarnings,
      userEarnings,
      currentBalance,
      sales,
      followers,
      previousFollowers,
      previousSales,
      error,
    } = this.props;

    if (isFetchingUserEarnings || isFetchingUser || isFetchingUserAccount) {
      return <Loading />;
    }

    if (error) {
      return (
        <InformationPage
          image={emptyError}
          text="While getting your data there was an error"
          buttonText="Try to get data again"
          buttonClick={this.props.userShouldFetch.bind(this)}
        />
      );
    }

    let totalEarnings;

    if (userEarnings.length > 0) {
      totalEarnings = userEarnings.map(month =>
        parseFloat(month.earnings))
        .reduce((total, monthlyEarnings) => total + monthlyEarnings);
    }

    return (
      <div className="child">
        <CurrentBalance currentBalance={currentBalance} />
        { userEarnings.length > 0 ? <MonthlyChart userEarnings={userEarnings} /> : <EmptyChart /> }
        <InfoBoxes
          totalEarnings={totalEarnings}
          sales={sales}
          followers={followers}
          previousSales={previousSales}
          previousFollowers={previousFollowers} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { summary } = state;
  return {
    isFetchingUser: summary.isFetchingUser,
    isFetchingUserAccount: summary.isFetchingUserAccount,
    isFetchingUserEarnings: summary.isFetchingUserEarnings,

    shouldFetchUser: summary.shouldFetchUser,
    error: summary.error,

    currentBalance: summary.userAccount.available_earnings,
    userEarnings: summary.userEarnings,
    sales: summary.userDetails.sales,
    previousSales: summary.userDetails.previousSales,
    followers: summary.userDetails.followers,
    previousFollowers: summary.userDetails.previousFollowers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUser,
    hideNewSalesBadge,
    hideNewFollowersBadge,
    userShouldFetch,
    updatePrevPath,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
