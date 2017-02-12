import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  getUser,
  getUserAccount,
  getUserEarnings,
} from '../../store/Summary/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../../components/Loading';

class Summary extends Component {

  componentDidMount() {
    this.props.dispatch(getUser('teamfox'));
    this.props.dispatch(getUserAccount());
    this.props.dispatch(getUserEarnings());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  render() {

    if (this.props.isFetchingUserEarnings) {
      return <div className="child"><Loading /></div>;
    }

    let totalEarnings;

    if (this.props.userEarnings.length > 0) {
      totalEarnings = this.props.userEarnings.map(month =>
        parseFloat(month.earnings))
        .reduce((total, monthlyEarnings) => total + monthlyEarnings);
    }

    return (
      <div className="child">
        <h2>Summary</h2>
        Total earnings: {totalEarnings} <br />
        Followers: {this.props.totalFollowers} <br />
        Current Balance: {this.props.currentBalance} <br />
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { summary } = state;
  return {
    isFetchingUserEarnings: summary.isFetchingUserEarnings,
    userEarnings: summary.userEarnings,
    totalSales: summary.userDetails.sales,
    totalFollowers: summary.userDetails.followers,
    currentBalance: summary.userAccount.available_earnings,
  };
};

export default connect(mapStateToProps)(Summary);
