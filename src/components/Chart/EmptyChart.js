import React from 'react';

import {
  StyledEmpty,
  EmptySvg,
  EmptyText,
} from './style';

// import svg for empty state
import emptyChart from '../../assets/svg/empty-chart.svg';

function EmptyChart() {
  return (
    <StyledEmpty>
      <EmptySvg src={emptyChart} />
      <EmptyText>
        There isn’t enough data to create your beautiful sales chart
      </EmptyText>
    </StyledEmpty>
  );
}

export default EmptyChart;
