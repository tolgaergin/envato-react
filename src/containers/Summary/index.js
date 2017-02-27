import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getUser, hideNewFollowersBadge, hideNewSalesBadge } from '../../store/Summary/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../../components/Loading';
import CurrentBalance from '../../components/CurrentBalance';
import MonthlyChart from '../Chart';
import InfoBoxes from '../../components/InfoBoxes';

class Summary extends Component {

  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  componentWillUnmount() {
    this.props.dispatch(hideNewFollowersBadge(this.props.followers));
    this.props.dispatch(hideNewSalesBadge(this.props.sales));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shouldFetchUser !== nextProps.shouldFetchUser) {
      this.props.dispatch(getUser());
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
    } = this.props;

    if (isFetchingUserEarnings || isFetchingUser || isFetchingUserAccount) {
      return <Loading />;
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
        <MonthlyChart userEarnings={userEarnings} />
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

    currentBalance: summary.userAccount.available_earnings,
    userEarnings: summary.userEarnings,
    sales: summary.userDetails.sales,
    previousSales: summary.userDetails.previousSales,
    followers: summary.userDetails.followers,
    previousFollowers: summary.userDetails.previousFollowers,
  };
};

export default connect(mapStateToProps)(Summary);
