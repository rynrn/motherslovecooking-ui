import React from "react"
import _ from "lodash"
import ProductCard from "../../components/ProductCard/ProductCard"
import { useCart } from "../../context/cart"
import { getQuantity, getProductImage } from '../../utils/products-util';

const CartProductContainer = ({ currency, placeholder }) => {
  const [cart, dispatch] = useCart();
  return (
    <div className="products-grid">
      {_.keys(cart.products).map((index) => {
        const product = cart.products[index];
        return (
          <ProductCard {...product}
            key={product.id}
            currency={currency}
            quantity={getQuantity(cart, product.id)}
            src={getProductImage(product.images, placeholder.childImageSharp.fixed.src)}
            add={() => dispatch({ type: 'add', productId: product.id, name: product.name, price: product.price })}
            decrement={() => dispatch({ type: 'decrement', productId: product.id, decreasLimit: 0 })} />
        );
      })
      }
    </div>
  );
}

export default CartProductContainer;
