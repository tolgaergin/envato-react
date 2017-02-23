import React from 'react';

import { StyledPathArea } from './style';

const Area = ({ area, clipPath, gradient }) => (
  <StyledPathArea
    d={area}
    clipPath={`url(#${clipPath})`}
    fill={`url(#${gradient})`} />
);

Area.propTypes = {
  area: React.PropTypes.string,
  clipPath: React.PropTypes.string,
  gradient: React.PropTypes.string,
};

export default Area;
