import React from 'react';

import { StyledCircle } from './style';

const Dots = ({ circles, clipPath, setX, setY }) => (
  <g>
    {circles.map((circle, i) =>
      <StyledCircle
        r="2"
        key={i}
        cx={setX(circle.stringMonth)}
        cy={setY(circle.earnings)}
        clipPath={`url(#${clipPath})`} />
    )}
  </g>
);

Dots.propTypes = {
  circles: React.PropTypes.array,
  clipPath: React.PropTypes.string,
  setX: React.PropTypes.func,
  setY: React.PropTypes.func,
};

export default Dots;
