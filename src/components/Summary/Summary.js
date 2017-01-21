import React, { Component } from 'react';

import Loading from '../Loading';

const user = {
  username: 'teamfox',
  country: '',
  sales: '768',
  location: '',
  image: 'https://0.s3.envato.com/files/113825135/teamfox-80-80.png',
  homepage_image: 'https://0.s3.envato.com/files/113825138/teamfox-cover.png',
  followers: '56',
};

const account = {
  image: 'https://0.s3.envato.com/files/113825135/teamfox-80-80.png',
  firstname: 'MAZHAR',
  surname: 'TOLGA ERGIN',
  available_earnings: '175.50',
  total_deposits: '0.00',
  balance: '175.50',
  country: 'United Kingdom',
};

const sampleEarnings = {
  'earnings-and-sales-by-month': [
    {
      month: 'Sun Mar 01 00:00:00 +1100 2015',
      sales: '162',
      earnings: '1863.00',
    },
    {
      month: 'Wed Apr 01 00:00:00 +1100 2015',
      sales: '102',
      earnings: '1196.00',
    },
    {
      month: 'Fri May 01 00:00:00 +1000 2015',
      sales: '79',
      earnings: '930.35',
    },
    {
      month: 'Mon Jun 01 00:00:00 +1000 2015',
      sales: '68',
      earnings: '813.28',
    },
    {
      month: 'Wed Jul 01 00:00:00 +1000 2015',
      sales: '51',
      earnings: '609.96',
    },
    {
      month: 'Sat Aug 01 00:00:00 +1000 2015',
      sales: '59',
      earnings: '753.53',
    },
    {
      month: 'Tue Sep 01 00:00:00 +1000 2015',
      sales: '35',
      earnings: '445.20',
    },
    {
      month: 'Thu Oct 01 00:00:00 +1000 2015',
      sales: '32',
      earnings: '407.04',
    },
    {
      month: 'Sun Nov 01 00:00:00 +1100 2015',
      sales: '19',
      earnings: '241.68',
    },
    {
      month: 'Tue Dec 01 00:00:00 +1100 2015',
      sales: '16',
      earnings: '203.52',
    },
    {
      month: 'Fri Jan 01 00:00:00 +1100 2016',
      sales: '16',
      earnings: '203.52',
    },
    {
      month: 'Mon Feb 01 00:00:00 +1100 2016',
      sales: '20',
      earnings: '257.52',
    },
    {
      month: 'Tue Mar 01 00:00:00 +1100 2016',
      sales: '14',
      earnings: '181.44',
    },
    {
      month: 'Fri Apr 01 00:00:00 +1100 2016',
      sales: '13',
      earnings: '171.18',
    },
    {
      month: 'Sun May 01 00:00:00 +1000 2016',
      sales: '8',
      earnings: '108.00',
    },
    {
      month: 'Wed Jun 01 00:00:00 +1000 2016',
      sales: '9',
      earnings: '121.50',
    },
    {
      month: 'Fri Jul 01 00:00:00 +1000 2016',
      sales: '12',
      earnings: '162.00',
    },
    {
      month: 'Mon Aug 01 00:00:00 +1000 2016',
      sales: '8',
      earnings: '108.00',
    },
    {
      month: 'Thu Sep 01 00:00:00 +1000 2016',
      sales: '7',
      earnings: '94.50',
    },
    {
      month: 'Sat Oct 01 00:00:00 +1000 2016',
      sales: '13',
      earnings: '432.00',
    },
    {
      month: 'Tue Nov 01 00:00:00 +1100 2016',
      sales: '12',
      earnings: '162.00',
    },
    {
      month: 'Thu Dec 01 00:00:00 +1100 2016',
      sales: '4',
      earnings: '54.00',
    },
    {
      month: 'Sun Jan 01 00:00:00 +1100 2017',
      sales: '9',
      earnings: '121.50',
    },
  ],
};

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
    const { username, image, followers } = user;
    const { firstname, surname, balance, country } = account;
    const totalEarnings = sampleEarnings['earnings-and-sales-by-month'].map(month => parseFloat(month.earnings))
      .reduce((total, monthlyEarnings) => total + monthlyEarnings);

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
  }

  render() {

    if (this.state.isLoading) {
      return <div><Loading /></div>;
    }

    return (
      <div>
        <h2>Summary</h2>
        {this.state.user.totalEarnings}
      </div>
    );
  }
};

export default Summary;
