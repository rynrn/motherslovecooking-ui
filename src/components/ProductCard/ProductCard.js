import React from 'react';
import _ from "lodash"
import { Link } from 'gatsby';
import { Card, Grid } from 'semantic-ui-react';
import CircularImage from '../CircularImage';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import '../../utils/image-util';

const ProductCard = ({ name, id, wordpress_id, price, slug, short_description, src, currency, quantity,
  categories = [], add, decrement, isRelatedProduct = false }) => {
  return (
    <Card centered className="component-card">
      <Card.Content>
        <Grid>
          <Grid.Column width={5}>
            <Link to={'/product/' + slug} >
              <CircularImage src={src} />
            </Link>
          </Grid.Column>
          <Grid.Column width={11}>
            <Link to={'/product/' + slug}>
              <Card.Header as="h3" className="break-words">{name}</Card.Header>
            </Link>
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
