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
  related_products = [], description, slug, short_description, categories = [] }) => {
  const [cart, dispatch] = useCart();

  const data = useStaticQuery(graphql`
    query ProductDetailsQuery {
      site {
        siteMetadata {
          currency
          title
          siteUrl
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

  const productImages = getProductImages(images, data.placeholder.childImageSharp.fixed.src);
  let firstImage = _.head(productImages);
  firstImage = _.get(firstImage, 'original');
  const otherImages = _.tail(productImages).map(i => i.original);
  return (
    <div className="view-component product-details">
      <div className="product-details__breadcrumbs">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      <div className="product-details__details-wrapper">
        <div className="product-details__image-galery">
          {/* <ImageGallery
            items={productImages}
            slideDuration={550}
            showPlayButton={false}
            showThumbnails={false}
            useBrowserFullscreen={false}
            isRTL={true}
            showNav={isOnLine}
            disableSwipe={!isOnLine}
          /> */}
          <img className="the-image" src={firstImage} alt={name} />
          <div className="other-product-images">
            {otherImages.map((img, i) => <img key={i} className="small-image" src={img} alt={name} />)}
          </div>
        </div>
        <div className="product-details__content">
          <div>
            <h1 className="product-details__header">{name}</h1>
            <div className="product-details__description" dangerouslySetInnerHTML={{ __html: description }} />
            {/* <img src={firstImage} alt={name} hidden aria-hidden="true" /> */}
          </div>
          <Divider />

          <div className="product-details__price">
            <div hidden aria-hidden="true">
            </div>
            <span>מחיר: </span>
            <span>{data.site.siteMetadata.currency}</span>
            <span dangerouslySetInnerHTML={{ __html: price }} />

          </div>

          <AddToCartButton right quantity={getQuantity(cart, id)}
            add={() => dispatch({ type: 'add', productId: id, name, price: price })}
            decrement={() => dispatch({ type: 'decrement', productId: id, decreasLimit: 0 })} />

          <Divider />

          <h2>קטגוריות</h2>

          <ul className="product-details__meta">
            {categories.map(({ name, wordpress_id, slug }) => <li key={wordpress_id}>
              <Link to={`/category/${slug}`}>{name}</Link>
            </li>)}
          </ul>

          <h2>גודל\כמות המנה</h2>
          <div className="product-details__description" dangerouslySetInnerHTML={{ __html: short_description }} />

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
                isRelatedProduct={true}
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
