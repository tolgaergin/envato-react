import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  getUser,
  getUserAccount,
  getUserEarnings,
} from '../../store/Summary/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../../components/Loading';
import CurrentBalance from '../../components/Summary/CurrentBalance';
import MonthlyChart from '../../components/Summary/MonthlyChart';
import InfoBoxes from '../../components/Summary/InfoBoxes';

class Summary extends Component {

  componentDidMount() {
    this.props.dispatch(getUser('teamfox'));
    this.props.dispatch(getUserAccount());
    this.props.dispatch(getUserEarnings());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  render() {
    const {
      isFetchingUser,
      isFetchingUserAccount,
      isFetchingUserEarnings,
      userEarnings,
      currentBalance,
      totalSales,
      followers,
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
          totalSales={totalSales}
          followers={followers} />
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

    currentBalance: summary.userAccount.available_earnings,
    userEarnings: summary.userEarnings,
    totalSales: summary.userDetails.sales,
    followers: summary.userDetails.followers,
  };
};

export default connect(mapStateToProps)(Summary);
