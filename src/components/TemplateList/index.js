import React from 'react';
import Loading from '../Loading';
import TemplateItem from './TemplateItem';

const TemplateList = ({ templates, isFetching }) => (
  isFetching ? <Loading /> : (
    <div className="child">
      <h2>Templates</h2>
      <ul>
        {
          Object.keys(templates).map(key =>
            <TemplateItem
              key={key}
              index={key}
              item={templates[key]}
            />
          )
        }
      </ul>
    </div>
  )
);

TemplateList.propTypes = {
  templates: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
};

export default TemplateList;
