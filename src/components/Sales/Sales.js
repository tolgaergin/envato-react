import React, { Component } from 'react';
import Envato from '../../envato';

import Loading from '../Loading';

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
    const envato = Envato({
      username: this.props.settings.username,
      token: this.props.settings.token,
    });

    envato.authorStatement({
      type: 'Sale',
      site: 'themeforest.net',
    }, (err, data) => {
      if (err) { return console.log(data); }

      this.props.handlePrevPath(this.props.location.pathname);

      this.setState({
        sales: data,
        isLoading: false,
      });
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
      return <div className="child" style={this.props.style}><Loading /></div>;
    }

    return (
      <div className="child" style={this.props.style}>
        <h2>Sales</h2>
        <ul>
          {Object.keys(this.state.sales).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
};

export default Sales;
