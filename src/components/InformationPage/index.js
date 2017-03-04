import React from 'react';

import {
  EmptyCenter,
  EmptyImage,
  EmptyMessage,
  EmptyBottom,
  Button
} from './style';

function InformationPage(props) {
  const { image, text, buttonText, buttonHref, buttonClick } = props;
  return (
    <div className="child">
      <EmptyCenter>
        <EmptyImage src={image} />
        <EmptyMessage>{text}</EmptyMessage>
      </EmptyCenter>
      <EmptyBottom>
        <Button
          href={buttonHref}
          onClick={buttonClick}
        >{buttonText}</Button>
      </EmptyBottom>
    </div>
  );
}

InformationPage.propTypes = {
  image: React.PropTypes.string,
  text: React.PropTypes.string,
  buttonText: React.PropTypes.string,
  buttonHref: React.PropTypes.string,
  buttonClick: React.PropTypes.func,
};

export default InformationPage;
