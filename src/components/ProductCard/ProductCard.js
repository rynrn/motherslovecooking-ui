import React from 'react';
import _ from "lodash"
import { Link } from 'gatsby';
import { Card, Header, Grid } from 'semantic-ui-react';
import CircularImage from '../CircularImage';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import '../../utils/image-util';

const ProductCard = ({ name, id, wordpress_id, price, short_description, src, currency, quantity,
  categories = [], add, decrement, isRelatedProduct = false }) => {
  const cardAttr = isRelatedProduct ? {
    itemProp: 'isRelatedTo',
    itemScope: 'itemcope',
    itemType: 'http://schema.org/Product'
  } : {};
  return (
    <Card centered className="component-card" {...cardAttr}>
      <Card.Content>
        <Grid>
          <Grid.Column width={5}>
            <Link to={'/product/' + (id || wordpress_id)}>
              <CircularImage src={src} />
            </Link>
          </Grid.Column>
          <Grid.Column width={11}>
            <Card.Header as="h3" className="break-words">{name}</Card.Header>
            <Card.Meta className="meta-card">
              <div className="tag-card">
                {categories.map(cat => cat.name).join(', ')}
              </div>
              <div className="short-description-card" dangerouslySetInnerHTML={{ __html: short_description }} />
            </Card.Meta>
            <div className="price-card">
              מחיר: <span dangerouslySetInnerHTML={{ __html: currency + price }} />
            </div>
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
