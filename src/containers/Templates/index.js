import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTemplates, templateShouldFetch } from '../../store/Templates/actions';
import { updatePrevPath } from '../../store/Settings/actions';

import TemplateList from '../../components/TemplateList';

import InformationPage from '../../components/InformationPage';
import emptyError from '../../assets/svg/empty-error.svg';

class Templates extends Component {
  componentDidMount() {
    this.props.getTemplates();
    this.props.updatePrevPath(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shouldFetch !== nextProps.shouldFetch) {
      this.props.getTemplates();
    }
  }

  render() {
    const {
      isFetching,
      error,
      templateList,
      templateShouldFetch,
    } = this.props;

    if (error) {
      return (
        <InformationPage
          image={emptyError}
          text="While getting your data there was an error"
          buttonText="Try to get data again"
          buttonClick={templateShouldFetch.bind(this)}
        />
      );
    }

    return (
      <TemplateList
        isFetching={isFetching}
        templates={templateList}
      />
    );
  }
}

const mapStateToProps = state => {
  const { templates } = state;
  return {
    isFetching: templates.isFetching,
    templateList: templates.data,
    shouldFetch: templates.shouldFetch,
    error: templates.error,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getTemplates,
    templateShouldFetch,
    updatePrevPath,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
