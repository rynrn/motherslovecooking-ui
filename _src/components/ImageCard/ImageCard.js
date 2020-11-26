import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageCard = ({ text, src, shouldHideText }) => {
  return (
    <div className="big-menu-card">
      {!shouldHideText && <div className="img-text">{text}</div>}
      <Image src={src} size='big' alt={text} />
    </div>
  );
};

export default ImageCard;
