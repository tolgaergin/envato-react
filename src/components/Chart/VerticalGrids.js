import React from 'react';

import { StyledGrid } from './style';

const VerticalGrids = ({ grids, clipPath, setX, setY, margin }) => (
  <g>
    {grids.map((grid, i) =>
      <StyledGrid
        key={i}
        x1={setX(grid.stringMonth)}
        x2={setX(grid.stringMonth)}
        y1={-margin.top}
        y2={setY(grid.earnings) - 2}
        clipPath={`url(#${clipPath})`} />
    )}
  </g>
);

VerticalGrids.propTypes = {
  grids: React.PropTypes.array,
  clipPath: React.PropTypes.string,
  setX: React.PropTypes.func,
  setY: React.PropTypes.func,
  margin: React.PropTypes.object,
};

export default VerticalGrids;
