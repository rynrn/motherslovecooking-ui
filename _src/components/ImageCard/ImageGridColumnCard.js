import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ImageGridColumnCard = ({ text, src }) => {
  return (
    <Grid.Column className='menu-card'>
      <div className="img-text">{text}</div>
      <Image src={src} size='large' alt={text} />
    </Grid.Column>
  );
};

export default ImageGridColumnCard;
