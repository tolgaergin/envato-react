import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTemplates, templateShouldFetch } from '../../store/Templates/actions';
import { updatePrevPath } from '../../store/Settings/actions';

const electron = window.require('electron');
electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

import TemplateList from '../../components/TemplateList';
import Loading from '../../components/Loading';
import InformationPage from '../../components/InformationPage';
import emptyError from '../../assets/svg/empty-error.svg';
import emptyPortfolio from '../../assets/svg/empty-portfolio.svg';

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

  openExternal(url) {
    ipcRenderer.sendSync('external-url', url);
  }

  render() {
    const {
      isFetching,
      error,
      templateList,
      templateShouldFetch,
    } = this.props;

    // If loading
    if (isFetching) {
      return <Loading />;
    }

    // If error exists
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

    // If user has empty data
    if (!templateList.length) {
      return (
        <InformationPage
          image={emptyPortfolio}
          text="You haven’t uploaded any item to Envato Market yet"
          buttonText="Try to upload your first template"
          buttonClick={() => this.openExternal('http://envato.com')}
        />
      );
    }

    return (
      <TemplateList
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
