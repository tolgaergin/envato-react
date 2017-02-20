import React from 'react';

import { Container, Dots, Dot } from './style';

const Loading = () => (
  <div className="child">
    <Container>
      Loading
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Container>
  </div>
);

export default Loading;
