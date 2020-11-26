import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader, Container } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchProducts } from '../Products/actions';
import { productPropType } from '../Products/reducer';
import ProductsList from '../../components/ProductsList';

class BaseProducts extends Component {
  constructor(props) {
    super(props);
    this.loadProducts = this.loadProducts.bind(this);
    this.title = 'כל המנות שלי';
    document.querySelector('html').scrollTop = 0;
  }

  componentDidMount() {
    if (this.props.searchVisible) {
      this.props.closeSearch();
    }

    this.readProducts(1);
  }

  /**
   * Filter and return featured products (if there are any)
   */
  getFilteredProducts() {
    const items = this.props.products.filter(product => product.featured);
    if (items.length > 0) {
      return items;
    }

    return this.props.products;
  }

  loadProducts() {
    if (this.props.hasMore) {
      const items = this.getFilteredProducts();

      // 20 is the default per_page number used for paginating products
      const nextPage = Math.round(items.length / 20) + 1;
      this.readProducts(nextPage);
    }
  }

  readProducts(page) {
    const { dispatch } = this.props;
    dispatch(fetchProducts({
      page,
      orderby: 'title',
      per_page: 100,
    }));
  }

  render() {
    const { loading, products, hasMore } = this.props;

    if (loading === 1 && products.length === 0) {
      return (
        <Container style={{ minHeight: '300px' }}>
          <Loader active />
        </Container>
      );
    }

    if (products.length === 0) {
      return (
        <Container>
          <p>לא נמצאו מוצרים.</p>
        </Container>
      );
    }

    // Filter featured products (if there are any)
    const items = this.getFilteredProducts();

    return (
      <InfiniteScroll
        dataLength={items.length}
        next={this.loadProducts}
        hasMore={hasMore}
      >
        <ProductsList products={items} title={this.title} />
        {/* <ProductsList products={_.orderBy(items, ['name'], ['asc'])} title="כל המנות שלי" /> */}
      </InfiniteScroll>
    );
  }
}

BaseProducts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(productPropType).isRequired,
  hasMore: PropTypes.bool.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
};

export default BaseProducts;
