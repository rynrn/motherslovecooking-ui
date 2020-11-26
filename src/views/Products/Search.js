import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from './actions';
import { getProductsFetching, getProducts, productPropType, getProductsHasMore } from './reducer';
import { closeSearch } from '../../components/NavBar/actions';
import { isSearchVisible } from '../../components/NavBar/reducer';
import BaseProducts from './base';

class Search extends BaseProducts {
  constructor(props) {
    super(props);
    const { search } = this.props.match.params;
    this.title = `חיפוש '${search}'`;
  }

  getFilteredProducts() {
    const { search } = this.props.match.params;
    const filteredItems = this.props.products.filter(product => product.name.indexOf(search) > -1);

    const items = filteredItems.filter(product => product.featured);
    if (items.length > 0) {
      return items;
    }

    return filteredItems;
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(productPropType).isRequired,
  hasMore: PropTypes.bool.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: getProductsFetching(state.products),
  products: getProducts(state.products),
  hasMore: getProductsHasMore(state.products),
  searchVisible: isSearchVisible(state.navbar),
});

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ fetchProducts, closeSearch }, dispatch));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
