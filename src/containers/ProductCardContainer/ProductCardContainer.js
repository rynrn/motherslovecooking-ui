import React from "react"
import _ from "lodash"
import { useStaticQuery, graphql } from 'gatsby';
import ProductCard from "../../components/ProductCard/ProductCard"
import { useCart } from "../../context/cart"
import '../../utils/image-util';



const ProductCardContainer = (props) => {
  const [cart, dispatch] = useCart();
  const data = useStaticQuery(graphql`
    query ProductCardQuery {
      site {
        siteMetadata {
          currency
        }
      }
      placeholder: file(relativePath: { eq: "placeholder-image.jpg" }) {
        ...squareImage
      }
    }
  `)

  let src = _.head(props.images);
  src = _.isEmpty(src) ? data.placeholder.childImageSharp.fixed.src : src.src;

  const getQuantity = () => {
    let quantity = 0;
    if (!!cart.products[props.id]) {
      quantity = cart.products[props.id].quantity;
    }
    return quantity;
  }

  return (
    <ProductCard {...props}
      currency={data.site.siteMetadata.currency}
      quantity={getQuantity()}
      src={src}
      add={() => dispatch({ type: 'add', productId: props.id, name: props.name, price: props.price })}
      decrement={() => dispatch({ type: 'decrement', productId: props.id, decreasLimit: 0 })} />
  );
}

export default ProductCardContainer
