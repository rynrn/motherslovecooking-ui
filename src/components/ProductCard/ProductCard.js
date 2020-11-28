import React from 'react';
import _ from "lodash"
import { Link } from 'gatsby';
import { Card, Header, Grid } from 'semantic-ui-react';
import CircularImage from '../CircularImage';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import '../../utils/image-util';

const ProductCard = ({ name, id, wordpress_id, price, src, currency, quantity,
  categories = [], add, decrement }) => {
  return (
    <Card centered className="component-card">
      <Card.Content>
        <Grid>
          <Grid.Column width={5}>
            <Link to={'/product/' + (id || wordpress_id)}>
              <CircularImage src={src} />
            </Link>
          </Grid.Column>
          <Grid.Column width={11}>
            <Card.Header className="break-words">{name}</Card.Header>
            <Card.Meta>{categories.map(cat => cat.name).join(', ')}</Card.Meta>
            {price ?
              (
                <Header as="h3" color="pink">
                  <div dangerouslySetInnerHTML={{ __html: currency + price }} />
                </Header>
              )
              : null}
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <AddToCartButton center add={add} quantity={quantity} decrement={decrement} />
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
