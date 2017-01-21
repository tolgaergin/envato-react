import React, { Component } from 'react';

import Loading from '../Loading';

const sampleData = {
  'new-files-from-user': [
    {
      id: '10579013',
      item: 'Pleasure - Material Design Responsive Admin Panel',
      url: 'https://themeforest.net/item/pleasure-material-design-responsive-admin-panel/10579013',
      user: 'teamfox',
      thumbnail: 'https://preview-tf.s3.envato.com/files/135577473/Pleasure_Thumbnail.png',
      sales: '765',
      rating: '5.0',
      rating_decimal: '4.79',
      cost: '24.00',
      uploaded_on: 'Sun Mar 01 10:16:26 +0000 2015',
      last_update: 'Wed May 27 09:51:52 +0000 2015',
      tags: 'admin, admin dashboard, material design, parallax, pleasure',
      category: 'site-templates/admin-templates',
    },
  ],
};

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
    this.setState({
      templates: sampleData,
      isLoading: false,
    });
  }

  renderListItem(key) {
    const template = this.state.templates['new-files-from-user'][key];
    return (
      <li key={key}>
        {template.item}
      </li>
    );
  }

  render() {
    //['new-files-from-user'].map(this.renderListItem)
    //const list = this.state.templates['new-files-from-user'].item;
    //this.state.templates['new-files-from-user'].map(template => console.log(template.item));

    if (this.state.isLoading) {
      return <div><Loading /></div>;
    }

    return (
      <div>
        <ul>
        {Object.keys(this.state.templates['new-files-from-user']).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default Templates;
