import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTemplates } from '../../store/Templates/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import TemplateList from '../../components/TemplateList';

class Templates extends Component {
  componentDidMount() {
    this.props.dispatch(getTemplates('teamfox'));
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  render() {
    return (
      <TemplateList
        isFetching={this.props.isFetching}
        templates={this.props.templateList}
        />
    );
  }
}

const mapStateToProps = state => {
  const { templates } = state;
  return {
    isFetching: templates.isFetching,
    templateList: templates.data,
  };
};

export default connect(mapStateToProps)(Templates);
