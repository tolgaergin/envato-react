import React from 'react';
import moment from 'moment';

import { StyledText } from './style';

const VerticalGridTexts = ({ texts, margin, setX }) => (
  <g>
    {texts.map((text, i) =>
      <StyledText
        key={i}
        x={-margin.top + 5}
        y={-setX(text.stringMonth)}
        transform="rotate(90)"
        dy="20">
        {moment(text.stringMonth).format('MMM YY')}'
      </StyledText>
    )}
  </g>
);

// VerticalGridTexts.propTypes = {
//   texts: ,
// };

export default VerticalGridTexts;
