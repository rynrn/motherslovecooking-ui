import React from "react"
import _ from "lodash"
import CartProduct from "../../components/CartProduct/CartProduct"
import { useCart } from "../../context/cart"

const CartProductContainer = ({ currency }) => {
  const [cart, dispatch] = useCart();
  return (
    <>
      {_.keys(cart.products).map((index) => {
        const product = cart.products[index];
        return (
          <CartProduct
            key={index}
            product={product}
            currency={currency}
            removeItem={(id) => dispatch({ type: 'remove', productId: id })}
            incrementItem={(id) => dispatch({ type: 'increment', productId: id })}
            decrementItem={(id) => dispatch({ type: 'decrement', productId: id })}
          />
        )
      })
      }
    </>
  );
}

export default CartProductContainer
