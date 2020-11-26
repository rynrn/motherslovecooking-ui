import 'whatwg-fetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { cartProductPropType } from './reducer';
import config from '../../config/config';

class Checkout extends Component {
  async goToCheckoutPage() {
    let items = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const product of this.props.cart) {
      items.push({ product_id: product.id, quantity: product.quantity });
    }

    items = btoa(JSON.stringify(items));
    window.location.href = `${config.API_ADD_TO_CART}?items=${items}`;
  }

  render() {
    return (
      <Form>

        <Button color="pink" fluid onClick={() => this.goToCheckoutPage()}>
          תשלום
        </Button>
      </Form>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(cartProductPropType).isRequired,
};

export default Checkout;
