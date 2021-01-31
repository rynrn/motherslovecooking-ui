import React from 'react';
import { Link } from 'gatsby';
import { Image } from 'semantic-ui-react';

const ImageCard = ({ text, to, src, data, className = '', shouldHideText }) => {

  const content = () => (
    <>
      {!shouldHideText && <div className="img-text">{text}</div>}
      {!!data && <Image {...data} size='big' alt={text} />}
      {!!src && <Image src={src} size='big' alt={text} />}
    </>
  )

  return (
    <div className={`big-menu-card ${className}`}>
      {!!to && <Link to={to}>{content()}</Link>}
      {!to && <span>{content()}</span>}
    </div>
  );
};

export default ImageCard;
