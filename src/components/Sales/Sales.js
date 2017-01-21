import React, { Component } from 'react';

import Loading from '../Loading';

const sampleSales = [
  {
    date: '2017-01-18 20:47:17 +1100',
    order_id: 50077356,
    type: 'Sale',
    detail: 'Pleasure - Material Design Responsive Admin Panel (Regular License)',
    item_id: 10579013,
    document: 'IVIP15364356',
    price: 20,
    eu_vat: null,
    us_rwt: null,
    us_bwt: null,
    amount: 20,
    site: 'themeforest.net',
    other_party_country: 'United States',
    other_party_region: 'California',
    other_party_city: 'Los Angeles',
    other_party_zipcode: '90028',
  },
];

class Sales extends Component {
  constructor() {
    super();

    this.state = {
      sales: {},
      isLoading: true,
    };

    this.loadSales = this.loadSales.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    this.loadSales();
  }

  loadSales() {
    this.setState({
      sales: sampleSales,
      isLoading: false,
    });
  }

  renderListItem(key) {
    const item = this.state.sales[key];
    return (
      <li key={key}>
        {item.date} {item.price}
      </li>
    );
  }

  render() {

    if (this.state.isLoading) {
      return <div><Loading /></div>;
    }

    return (
      <div>
        <h2>Sales</h2>
        <ul>
          {Object.keys(this.state.sales).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
};

export default Sales;
