import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageCard = ({ text, src, data, shouldHideText }) => {
  return (
    <div className="big-menu-card">
      {!shouldHideText && <div className="img-text">{text}</div>}
      {!!data && <Image {...data} size='big' alt={text} />}
      {!!src && <Image src={src} size='big' alt={text} />}
    </div>
  );
};

export default ImageCard;
