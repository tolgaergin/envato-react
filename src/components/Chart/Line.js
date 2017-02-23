import React from 'react';

import { StyledPathLine } from './style';

const Line = ({ line, clipPath }) => (
  <StyledPathLine
    d={line}
    clipPath={`url(#${clipPath})`} />
);

Line.propTypes = {
  line: React.PropTypes.string,
  clipPath: React.PropTypes.string,
};

export default Line;
