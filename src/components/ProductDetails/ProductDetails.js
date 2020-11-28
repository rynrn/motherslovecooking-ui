import React from 'react';
import _ from 'lodash';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Divider } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import ProductCard from '../ProductCard/ProductCard';
import '../../utils/image-util';
import { getQuantity, getProductImage, getProductImages } from '../../utils/products-util';
import { useCart } from '../../context/cart';

const ProductDetails = ({ name, price, images, id,
  related_products = [], description, categories = [] }) => {
  const [cart, dispatch] = useCart();

  const data = useStaticQuery(graphql`
    query ProductDetailsQuery {
      site {
        siteMetadata {
          currency
          title
        }
      }
      placeholder: file(relativePath: { eq: "placeholder-image.jpg" }) {
        ...squareImage
      }
    }
  `);

  const breadcrumbsItems = [
    {
      to: '/',
      name: data.site.siteMetadata.title
    },
    {
      to: '/products',
      name: 'מוצרים'
    },
    {
      name: name
    }
  ];

  let isOnLine = true;
  if (typeof window !== 'undefined') {
    isOnLine = window.navigator.onLine;
  }

  return (
    <div className="view-component product-details">
      <div className="product-details__breadcrumbs">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      <div className="product-details__details-wrapper">
        <div className="product-details__image-galery">
          <ImageGallery
            items={getProductImages(images, data.placeholder.childImageSharp.fixed.src)}
            slideDuration={550}
            showPlayButton={false}
            showThumbnails={false}
            showNav={isOnLine}
            disableSwipe={!isOnLine}
          />
        </div>
        <div className="product-details__content">
          <h1 className="product-details__header">{name}</h1>
          <div className="product-details__description" dangerouslySetInnerHTML={{ __html: description }} />
          <Divider />

          <div className="product-details__price">
            <span>מחיר: </span>
            <span dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.currency + price }} />
          </div>

          <AddToCartButton right quantity={getQuantity(cart, id)}
            add={() => dispatch({ type: 'add', productId: id, name, price: price })}
            decrement={() => dispatch({ type: 'decrement', productId: id, decreasLimit: 0 })} />

          <Divider />

          <h2>קטגוריות</h2>

          <ul className="product-details__meta">
            {categories.map(({ name, wordpress_id }) => <li key={wordpress_id}>
              <Link to={`/category/${wordpress_id}`}>{name}</Link>
            </li>)}
          </ul>
        </div>
      </div>

      <Divider hidden />

      <Divider />

      <h2>
        <span> אנשים שהזמינו </span>
        <span> {name} </span>
        <span> הזמינו גם: </span>
      </h2>

      <Divider hidden />

      <div className="products-grid">
        {
          related_products.map(relatedProduct => {
            return (
              <ProductCard {...relatedProduct}
                key={relatedProduct.wordpress_id}
                currency={data.site.siteMetadata.currency}
                quantity={getQuantity(cart, relatedProduct.wordpress_id)}
                src={getProductImage(relatedProduct.images, data.placeholder.childImageSharp.fixed.src)}
                add={() => dispatch({ type: 'add', productId: relatedProduct.wordpress_id, name: relatedProduct.name, price: relatedProduct.price })}
                decrement={() => dispatch({ type: 'decrement', productId: relatedProduct.wordpress_id, decreasLimit: 0 })} />
            );
          })
        }

        <Divider hidden />

      </div>
    </div >
  );
}

export default ProductDetails;
