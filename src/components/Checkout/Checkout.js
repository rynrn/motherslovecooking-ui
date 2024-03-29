import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';

const Checkout = ({ orderCheckout, total }) => {

  function checkoutClick() {
    // google conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1039718244/KfR2CNGljoACEOSu4-8D',
        'value': total,
        'currency': 'ILS',
        'event_category': 'checkout',
        'event_label': 'cart page button click',
      });

      window.gtag('event', 'click', {
        'send_to': 'UA-124323639-1',
        'value': total,
        'currency': 'ILS',
        'event_category': 'checkout',
        'event_label': 'cart page button click',
      });
    }

    setTimeout(orderCheckout, 200);
  }

  return (
    <Form>
      <Divider hidden />
      <Button color="pink" fluid onClick={() => checkoutClick()}>
        תשלום
      </Button>
    </Form>
  );
}

// class Checkout extends Component {
//   async goToCheckoutPage() {
//     let items = [];

//     // eslint-disable-next-line no-restricted-syntax
//     for (const product of this.props.cart) {
//       items.push({ product_id: product.id, quantity: product.quantity });
//     }

//     items = btoa(JSON.stringify(items));
//     window.location.href = `${config.API_ADD_TO_CART}?items=${items}`;
//   }

//   render() {
//     return (
//       <Form>

//         <Button color="pink" fluid onClick={() => this.goToCheckoutPage()}>
//           תשלום
//         </Button>
//       </Form>
//     );
//   }
// }

export default Checkout;
