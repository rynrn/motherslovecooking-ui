import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Icon, Label, Menu, Button, Input, Form, Image } from 'semantic-ui-react';
import config from '../../config/config';
import { openMenu, openSearch, closeSearch } from './actions';
import { isSearchVisible } from './reducer';
import { getCart } from '../../views/Cart/reducer';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      toSearchPage: false,
    };

    this.showSidebar = this.showSidebar.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  getQuantity() {
    const { cart } = this.props;
    return cart.reduce((quantity, item) => item.quantity + quantity, 0);
  }

  setSearch(e) {
    this.setState({ search: e.target.value });
  }

  /**
   * Handle search form submit.
   * Set state for redirecting to search page and close search box.
   */
  handleSubmit() {
    this.setState({ toSearchPage: this.state.search, search: '' }, () => this.props.closeSearch());
  }

  /**
   * Open search box when icon is clicked.
   * Reset search input and redirect when the search is opened.
   */
  openSearch() {
    this.setState({ toSearchPage: false, search: '' }, () => this.props.openSearch());
  }

  closeSearch() {
    this.setState({ toSearchPage: false, search: '' }, () => this.props.closeSearch());
  }

  showSidebar(e) {
    e.stopPropagation();
    this.props.openMenu();
  }

  render() {
    const { searchVisible } = this.props;

    return (
      <Segment basic color="pink" inverted size="small" className="nav-bar">

        <Link to="/">
          <Image style={{
            verticalAlign: 'middle',
            position: 'absolute',
            top: '15px',
            left: '50%',
            transform: 'translateX(-50%)'
          }} src="/96icon_1512486555.jpg"
            size='tiny' circular bordered />
        </Link>
        <Menu fluid secondary>
          <Menu.Item fitted>
            {searchVisible &&
              <Form onSubmit={this.handleSubmit}>
                <Input
                  name="search"
                  type="text"
                  className="search"
                  value={this.state.search}
                  onChange={this.setSearch}
                  placeholder="חיפוש..."
                  autoFocus
                  icon="search"
                />
              </Form>
            }
          </Menu.Item>
          <Menu.Item position="left" fitted>
            <Menu.Item fitted>
              {searchVisible === false ?
                <Button icon="search" circular size="big" onClick={this.openSearch} />
                : null}
              {searchVisible &&
                <Icon name="close" size="large" className="shop-icon" onClick={this.closeSearch} />
              }
              <Icon.Group>
                <Link to="/cart" className="cart-link">
                  <Icon name="cart" size="large" className="shop-icon" />
                  {_.isEmpty(this.props.cart) ? null : (
                    <Label
                      color="orange"
                      size="mini"
                      floating
                      circular
                      content={this.getQuantity()}
                      className="cart-counter"
                    />
                  )}
                </Link>
              </Icon.Group>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item position="right" className="shop-name" fitted>
            {!searchVisible &&
              <Link to="/">
                {config.SHOP_NAME}
              </Link>
            }
          </Menu.Item>
          <Menu.Item position="right" onClick={this.showSidebar} fitted>
            <Icon name="content" size="large" onClick={this.showSidebar} className="shop-icon" />
          </Menu.Item>
        </Menu>
        {this.state.toSearchPage !== false && searchVisible ? <Redirect to={`/search/${this.state.toSearchPage}`} /> : null}
      </Segment>
    );
  }
}

NavBar.propTypes = {
  openMenu: PropTypes.func.isRequired,
  openSearch: PropTypes.func.isRequired,
  closeSearch: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  cart: getCart(state.cart),
  searchVisible: isSearchVisible(state.navbar),
});

export default connect(
  mapStateToProps,
  { openMenu, openSearch, closeSearch },
)(NavBar);
