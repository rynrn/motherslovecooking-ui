import React from 'react';
import { Link } from 'gatsby';
import { Grid, Image } from 'semantic-ui-react';

const ImageGridColumnCard = ({ text, to, src, data }) => {

  const content = () => (
    <>
      <div className="img-text">{text}</div>
      {!!data && <Image {...data} size='large' alt={text} />}
      {!!src && <Image src={src} size='large' alt={text} />}
    </>
  )

  return (
    <Grid.Column className='menu-card'>
      {!!to && <Link to={to}>{content()}</Link>}
      {!to && <span>{content()}</span>}
    </Grid.Column>
  );
};

export default ImageGridColumnCard;
