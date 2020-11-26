import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { toastr } from 'react-redux-toastr';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Header, Card, Icon, Button } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { productPropType } from '../Products/reducer';
import { addProduct } from '../Cart/actions';
import Rating from '../../components/Rating';
import Reviews from '../../components/Reviews';
import Variations from '../../components/Variations';
import SocialBox from './SocialBox';
import config from '../../config/config';

import './styles.css';

class ProductDetails extends Component {
  static isAnyCached(images) {
    return images
      .map((image) => {
        const newImage = new Image();
        newImage.src = image.original;
        return newImage.complete;
      })
      .filter(isCached => isCached === false);
  }

  constructor(props) {
    super(props);

    this.state = {
      selections: null,
      variationId: null,
    };

    this.receiveSelections = this.receiveSelections.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  getCategories() {
    return this.props.product.categories.map(category => category.name).join(', ');
  }

  getImageGallery() {
    if (_.isEmpty(this.props.product.images)) {
      return [{ original: '/placeholder-image.jpg' }];
    }
    return this.props.product.images.map(image => ({ original: image.src }));
  }

  /**
   * Modify component's state when a variation is selected.
   * @param {Object} selections
   * @param {Number} variationId
   */
  receiveSelections(selections, variationId) {
    this.setState({ selections, variationId });
  }

  /**
   * Add product to cart.
   * Display a warning if the product has variations and attributes were not selected.
   */
  addItem() {
    if (this.props.product.variations.length !== 0) {
      if (_.isNull(this.state.selections)) {
        toastr.warning('אנא בחר בחירה עבור כל פעולות המוצרים');
        return;
      }
    }

    const { dispatch } = this.props;
    const product = this.props.product;

    dispatch(
      addProduct(
        product.id,
        product.name,
        product.price,
        _.get(product, 'images[0].src', 'placeholder-image.jpg'),
        this.state.variationId,
        this.state.selections,
      ),
    );

    toastr.success('נוסף לסל', product.name + ' נוסף לעגלת הקניות שלך.');
  }

  render() {
    const anyCached =
      ProductDetails.isAnyCached(this.getImageGallery())[0] === false
        ? ProductDetails.isAnyCached(this.getImageGallery())[0]
        : true;

    return (
      <div className="view-component product-details">
        <Header textAlign="center" className="break-words">
          {this.props.product.name}
        </Header>
        <Card centered>
          <ImageGallery
            items={this.getImageGallery()}
            slideDuration={550}
            showPlayButton={false}
            showThumbnails={false}
            showNav={window.navigator.onLine || anyCached}
            disableSwipe={!window.navigator.onLine || !anyCached}
          />
          {this.props.product.rating_count > 0 ? (
            <Card.Content extra>
              <Rating
                rating={Math.round(Number(this.props.product.average_rating))}
                ratingCount={this.props.product.rating_count}
              />
            </Card.Content>
          ) : null}
          {this.props.product.categories.length === 0 ? null : (
            <Card.Content>{this.getCategories()}</Card.Content>
          )}
          <Card.Content>{!this.props.product.in_stock ? 'במלאי' : 'נגמר המלאי'}</Card.Content>
          {this.props.product.price ?
            (<Card.Content>
              <div dangerouslySetInnerHTML={{ __html: config.CURRENCY + this.props.product.price }} />
             </Card.Content>) : null}
          {this.props.product.variations.length === 0 ? null : (
            <Variations
              sendSelections={this.receiveSelections}
              productId={this.props.product.id}
              variationIds={this.props.product.variations}
            />
          )}
          {this.props.product.backorders_allowed || this.props.product.stock_status === 'instock' ? (
            <Button color="pink" fluid onClick={this.addItem}>
              הוספה לסל &nbsp;<Icon name="cart" />
            </Button>
          ) : null}
        </Card>
        {this.props.product.description.length === 0 ? null : (
          <Card centered>
            <Card.Content>
              <Card.Header as={Header} size="tiny">
                תיאור
              </Card.Header>
              <Card.Description>
                <div dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
              </Card.Description>
            </Card.Content>
          </Card>
        )}
        <Reviews productId={this.props.product.id} />
        <SocialBox permalink={this.props.product.permalink} />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  product: productPropType.isRequired,
};

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ addProduct }, dispatch));
}

export default connect(null, mapDispatchToProps)(ProductDetails);
