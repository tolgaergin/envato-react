import React from 'react';
import TemplateItem from './TemplateItem';

function TemplateList(props) {
  const { templates } = props;

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
};

TemplateList.propTypes = {
  templates: React.PropTypes.array,
};

export default TemplateList;
