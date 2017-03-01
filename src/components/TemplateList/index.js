import React from 'react';
import Loading from '../Loading';
import TemplateItem from './TemplateItem';

import InformationPage from '../InformationPage';
import emptyPortfolio from '../../assets/svg/empty-portfolio.svg';

function TemplateList(props) {
  const { templates, isFetching } = props;

  if (isFetching) {
    return <Loading />;
  } else {
    if (templates.length === 0) {
      return (
        <InformationPage
          image={emptyPortfolio}
          text="You haven’t uploaded any item to Envato Market yet"
          buttonText="Try to upload your first template"
          buttonHref="http://envato.com"
        />
      );
    } else {
      return (
        <div className="child">
          {
            Object.keys(templates).map(key =>
              <TemplateItem
                key={key}
                index={key}
                item={templates[key]}
              />
            )
          }
        </div>
      );
    }
  }
};

TemplateList.propTypes = {
  templates: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
};

export default TemplateList;
