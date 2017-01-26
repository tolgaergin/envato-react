import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTemplates } from '../../store/Templates/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import Loading from '../Loading';

class Templates extends Component {
  constructor() {
    super();

    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getTemplates('teamfox'));
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  renderListItem(key) {
    const template = this.props.templates.data[key];
    return (
      <li key={key}>
        {template.item}
      </li>
    );
  }

  render() {

    const templates = this.props.templates;

    if (templates.isFetching) {
      return <div className="child"><Loading /></div>;
    }

    return (
      <div className="child">
        <h2>Templates</h2>
        <ul>
        {Object.keys(templates.data).map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { templates } = state;
  return {
    templates,
  };
};

export default connect(mapStateToProps)(Templates);
