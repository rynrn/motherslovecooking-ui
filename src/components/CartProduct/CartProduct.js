import './styles.css';
import React, { useState } from 'react';
import { Card, Grid, Button, Icon, Input } from 'semantic-ui-react';
import CircularImage from '../../components/CircularImage';


const CartProduct = ({ product, currency, removeItem, incrementItem, decrementItem }) => {
  const [isExpanded, setExpanded] = useState(false);
  const quantity = product.quantity;
  const totalPrice = (Math.round(Number(product.price) * Number(quantity) * 100) / 100);

  return (
    <Card centered className="cart-product">
      <Card.Content>
        <Grid doubling>
          <Grid.Row centered key={product.id}>
            <Grid.Column width={4} textAlign="center">
              <CircularImage src={product.image} width={50} height={50} />
            </Grid.Column>
            <Grid.Column width={4} className="break-words">
              {product.name}
            </Grid.Column>
            <Grid.Column width={4}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    quantity + ' x ' + currency + product.price,
                }}
              />
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              <div
                dangerouslySetInnerHTML={{
                  __html: currency + totalPrice,
                }}
              />
            </Grid.Column>
            <div className="cart-buttons">
              <Button icon onClick={() => setExpanded(!isExpanded)} color="pink">
                <Icon name="pencil" />
              </Button>
              <Button icon className="cart-delete"
                onClick={() => removeItem(product.id, product.variationId)}>
                <Icon name="trash" />
              </Button>
            </div>
          </Grid.Row>
          {isExpanded ? (
            <Grid.Row>
              <Grid.Column width={4}>
                <p className="cart-quantity-label">&nbsp;כמות:</p>
              </Grid.Column>
              <Grid.Column width={10}>
                <Button icon onClick={() => decrementItem(product.id)} className="cart-button">
                  <Icon name="minus" />
                </Button>
                <Input value={quantity} readOnly className="cart-quantity-input" />
                <Button icon onClick={() => incrementItem(product.id)} className="cart-button">
                  <Icon name="plus" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ) : null}
        </Grid>
      </Card.Content>
    </Card>
  );
}

export default CartProduct;
