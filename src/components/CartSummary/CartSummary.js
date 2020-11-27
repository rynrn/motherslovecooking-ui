import React from 'react';
import { Link } from 'gatsby';
import { Grid, Card, Header } from 'semantic-ui-react';
import Checkout from '../Checkout/Checkout';

const CartSummary = ({ total, minimumTotal, currency, orderCheckout }) => {
  return (
    <Card centered className="cart-summary">
      <Card.Content>
        <Card.Header as="h2" textAlign="right">
          סיכום הזמנה
        </Card.Header>
        <Grid doubling>
          <Grid.Row>
            <Grid.Column width={11}>סה"כ</Grid.Column>
            <Grid.Column textAlign="right" width={5}>
              <div dangerouslySetInnerHTML={{ __html: currency + total }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {
          total > minimumTotal && <Checkout orderCheckout={orderCheckout} cart={total} />
        }
        {
          total < minimumTotal && <b><br />
            באפשרותך להוסיף עוד מוצרים לסל קניות
            <br />
            <Link to="/products">הוספת מוצרים</Link>
            <br />
            מינימום הזמנה של {minimumTotal} שח
          </b>
        }
      </Card.Content>
    </Card>
  );
};

export default CartSummary;
