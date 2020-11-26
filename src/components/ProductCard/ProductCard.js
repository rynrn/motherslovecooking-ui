import React from 'react';
import _ from "lodash"
import { Link } from 'gatsby';
import { Card, Button, Header, Grid, Icon } from 'semantic-ui-react';
import CircularImage from '../CircularImage';
import '../../utils/image-util';

const ProductCard = ({ name, id, price, src, currency, quantity,
  categories = [], add, decrement }) => {
  return (
    <Card centered className="component-card">
      <Card.Content>
        <Grid>
          <Grid.Column width={5}>
            <Link to={'/product/' + id}>
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
        <div className="wrapper-button-add-to-cart">
          <Button.Group size='large'>
            <Button positive onClick={add}>
              <Icon name='plus' />
            </Button>
            <Button.Or text={quantity} />
            <Button negative onClick={decrement}>
              <Icon name='minus' />
            </Button>
          </Button.Group>
        </div>
        {/* <Link to={'/product/' + id}>
          <Button color="pink" compact>
            להוסיף להזמנה &gt;
            </Button>
        </Link> */}
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
