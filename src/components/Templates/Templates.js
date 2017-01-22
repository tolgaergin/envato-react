import React, { Component } from 'react';
import Envato from '../../envato';

import Loading from '../Loading';

class Templates extends Component {
  constructor() {
    super();

    this.state = {
      templates: {},
      isLoading: true,
    };

    this.loadData = this.loadData.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {

    const envato = Envato({
      username: this.props.settings.username,
      token: this.props.settings.token,
    });

    envato.authorFiles({
      username: this.props.settings.username,
      site: 'ThemeForest',
    }, (err, data) => {
      if (err) { return console.log('data'); }

      this.props.handlePrevPath(this.props.location.pathname);

      this.setState({
        templates: data['new-files-from-user'],
        isLoading: false,
      });
    });
  }

  renderListItem(key) {
    const template = this.state.templates[key];
    return (
      <li key={key}>
        {template.item}
      </li>
    );
  }

  render() {

    if (this.state.isLoading) {
      return <div className="child" style={this.props.style}><Loading /></div>;
    }

    return (
      <div className="child" style={this.props.style}>
        <h2>Templates</h2>
        <ul>
        {Object.keys(this.state.templates).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default Templates;
