import React from "react"
import CartSummary from "../../components/CartSummary/CartSummary"
import { useCart } from "../../context/cart"
import { storage } from "../../services/local-storage.service"

const API_ADD_TO_CART = 'https://ordering.motherslovecooking.co.il/add-to-cart.php'

const CartSummaryContainer = ({ currency }) => {
  const [cart] = useCart();
  function onOrderCheckout() {

    let items = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const index in cart.products) {
      const product = cart.products[index];
      items.push({ product_id: product.id, quantity: product.quantity });
    }
    items = btoa(JSON.stringify(items));
    storage.removeItem('cart');
    window.location.href = `${API_ADD_TO_CART}?items=${items}`;
  }

  return (
    <CartSummary orderCheckout={() => onOrderCheckout()} {...cart} currency={currency} />
  );
}

export default CartSummaryContainer
