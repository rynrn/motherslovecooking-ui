import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Header } from 'semantic-ui-react';
import { cartProductPropType } from './reducer';
import Checkout from './Checkout';
import config from '../../config/config';

const CartSummary = props => (
  <Card centered className="cart-summary">
    <Card.Content>
      <Card.Header as={Header} textAlign="left">
        סיכום הזמנה
      </Card.Header>
      <Grid doubling>
        {/*
        <Grid.Row>
          <Grid.Column width={12}>Items price</Grid.Column>
          <Grid.Column textAlign="right" width={4}>
            ${props.total}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>Transportation price</Grid.Column>
          <Grid.Column textAlign="right" width={4}>
            $10
          </Grid.Column>
        </Grid.Row>
        */}
        <Grid.Row>
          <Grid.Column width={11}>סה"כ</Grid.Column>
          <Grid.Column textAlign="right" width={5}>
            <div dangerouslySetInnerHTML={{ __html: config.CURRENCY + props.total }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {
        props.total > 200 && <Checkout cart={props.cart} />
      }
      {
        props.total < 200 && <b><br/>
באפשרותך להוסיף עוד מוצרים לסל קניות
<br/>
<a href="/#/products">הוספת מוצרים</a>
<br/>
מינימום הזמנה של 200 שח
        </b>
      }
    </Card.Content>
  </Card>
);

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(cartProductPropType).isRequired,
};

export default CartSummary;
