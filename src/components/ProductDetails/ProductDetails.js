import React from 'react';
import _ from 'lodash';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Card, Icon, Button } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
// import Rating from '../../components/Rating';
// import Reviews from '../../components/Reviews';
// import Variations from '../../components/Variations';
// import SocialBox from '../SocialBox';
import '../../utils/image-util';
import { useCart } from '../../context/cart';

// variationId

const ProductDetails = ({ name, price, images, id, backorders_allowed, stock_status, description }) => {
  const [, dispatch] = useCart();

  const data = useStaticQuery(graphql`
    query ProductDetailsQuery {
      site {
        siteMetadata {
          currency
        }
      }
      placeholder: file(relativePath: { eq: "placeholder-image.jpg" }) {
        ...squareImage
      }
    }
  `);

  let _images = _.isEmpty(images) ? [data.placeholder.childImageSharp.fixed.src] : images;
  _images = _.map(_images, img => ({ original: _.isString(img) ? img : img.src }));

  let isOnLine = true;
  if (typeof window !== 'undefined') {
    isOnLine = window.navigator.onLine;
  }

  return (
    <div className="view-component product-details">
      <Card centered>
        <ImageGallery
          items={_images}
          slideDuration={550}
          showPlayButton={false}
          showThumbnails={false}
          showNav={isOnLine}
          disableSwipe={!isOnLine}
        />
        {/* {this.props.product.rating_count > 0 ? (
          <Card.Content extra>
            <Rating
              rating={Math.round(Number(this.props.product.average_rating))}
              ratingCount={this.props.product.rating_count}
            />
          </Card.Content>
        ) : null} */}
        {/* {this.props.product.categories.length === 0 ? null : (
          <Card.Content>{this.getCategories()}</Card.Content>
        )} */}
        {/* <Card.Content>{stock_status === 'instock' ? 'במלאי' : 'נגמר המלאי'}</Card.Content> */}
        {price ?
          (<Card.Content>
            <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.currency + price }} />
          </Card.Content>) : null}
        {/* {this.props.product.variations.length === 0 ? null : (
        <Variations
          sendSelections={this.receiveSelections}
          productId={this.props.product.id}
          variationIds={this.props.product.variations}
        />
      )} */}
        {backorders_allowed || stock_status === 'instock' ? (
          <Button color="pink" fluid onClick={() => dispatch({ type: 'add', productId: id, price, name })}>
            הוספה לסל &nbsp;<Icon name="cart" />
          </Button>
        ) : null}
      </Card>
      {_.size(description) > 0 &&
        <Card centered>
          <Card.Content>
            <Card.Header as={Header} size="tiny">
              תיאור
          </Card.Header>
            <Card.Description>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Card.Description>
          </Card.Content>
        </Card>
      }
      {/* <Reviews productId={id} /> */}
      {/* <SocialBox permalink={this.props.product.permalink} /> */}
    </div >
  );
}

export default ProductDetails;
