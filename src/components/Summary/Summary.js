import React, { Component } from 'react';
import Envato from '../../envato';

import Loading from '../Loading';

class Summary extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      user: {},
    };

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const envato = Envato({
      username: this.props.settings.username,
      token: this.props.settings.token,
    });

    const userDetails = new Promise((resolve, reject) => {
      envato.userDetails({
        username: this.props.settings.username,
      }, (err, data) => {
        if (err) { reject(err); }

        resolve(data.user);
      });
    });

    const userAccount = new Promise((resolve, reject) => {
      envato.userAccount((err, data) => {
        if (err) { reject(err); }

        resolve(data.account);
      });
    });

    const earningSales = new Promise((resolve, reject) => {
      envato.authorEarningsSales((err, data) => {
        if (err) { reject(err); }

        resolve(data['earnings-and-sales-by-month']);
      });
    });

    Promise.all([userDetails, userAccount, earningSales]).then(values => {
      const { username, image, followers } = values[0];
      const { firstname, surname, balance, country } = values[1];
      const totalEarnings = values[2].map(month =>
        parseFloat(month.earnings))
        .reduce((total, monthlyEarnings) => total + monthlyEarnings);

      this.props.handlePrevPath(this.props.location.pathname);

      this.setState({
        isLoading: false,
        user: {
          username,
          image,
          followers,
          firstname,
          surname,
          balance,
          country,
          totalEarnings,
        },
      });
    });
  }

  render() {

    if (this.state.isLoading) {
      return <div className="child" style={this.props.style}><Loading /></div>;
    }

    return (
      <div className="child" style={this.props.style}>
        <h2>Summary</h2>
        {this.state.user.totalEarnings}
      </div>
    );
  }
};

export default Summary;
