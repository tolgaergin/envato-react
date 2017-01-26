import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  getUser,
  getUserAccount,
  getUserEarnings,
} from '../../store/Summary/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../Loading';

class Summary extends Component {

  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(getUserAccount());
    this.props.dispatch(getUserEarnings());
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  render() {

    if (this.props.isFetchingUserEarnings) {
      return <div className="child"><Loading /></div>;
    }

    return (
      <div className="child">
        <h2>Summary</h2>
        {this.props.userEarnings}
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { summary } = state;
  return {
    isFetchingUserEarnings: summary.isFetchingUserEarnings,
    userEarnings: summary.userEarnings,
  };
};

export default connect(mapStateToProps)(Summary);
