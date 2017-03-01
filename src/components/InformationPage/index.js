import React from 'react';

import {
  EmptyCenter,
  EmptyImage,
  EmptyMessage,
  EmptyBottom,
  Button
} from './style';

function InformationPage(props) {
  const { image, text, buttonText, buttonHref } = props;
  return (
    <div className="child">
      <EmptyCenter>
        <EmptyImage src={image} />
        <EmptyMessage>{text}</EmptyMessage>
      </EmptyCenter>
      <EmptyBottom>
        <Button href={buttonHref}>{buttonText}</Button>
      </EmptyBottom>
    </div>
  );
}

InformationPage.propTypes = {
  image: React.PropTypes.string,
  text: React.PropTypes.string,
  buttonText: React.PropTypes.string,
  buttonHref: React.PropTypes.string,
};

export default InformationPage;
