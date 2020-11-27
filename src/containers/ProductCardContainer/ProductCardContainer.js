import React from "react"
import _ from "lodash"
import { useStaticQuery, graphql } from 'gatsby';
import ProductCard from "../../components/ProductCard/ProductCard"
import { useCart } from "../../context/cart"
import { getProductImage, getQuantity } from '../../utils/products-util';
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

  return (
    <ProductCard {...props}
      currency={data.site.siteMetadata.currency}
      quantity={getQuantity(cart, props.id)}
      src={getProductImage(props.images, data.placeholder.childImageSharp.fixed.src)}
      add={() => dispatch({ type: 'add', productId: props.id, name: props.name, price: props.price })}
      decrement={() => dispatch({ type: 'decrement', productId: props.id, decreasLimit: 0 })} />
  );
}

export default ProductCardContainer
