import React, { useState } from 'react';
import { Link, Redirect, useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Segment, Icon, Label, Menu, Image } from 'semantic-ui-react';
import { useCart } from "../../context/cart"
import './NavBar.css';

const getCartItems = (products) => {
  let count = 0;
  for (const index in products) {
    const product = products[index];
    count += product.quantity;
  }
  return count;
}

const NavBar = ({ title, openMenu, isMenuOpen }) => {
  const [cart] = useCart(false);
  const [isSearchVisible] = useState(false);
  const [toSearchPage] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "196icon_1512486555.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `)

  if (isMenuOpen) {
    return null;
  }

  return (
    <Segment basic color="pink" inverted size="small" className="nav-bar">

      <Link to="/">
        <Image style={{
          verticalAlign: 'middle',
          position: 'absolute',
          top: '15px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
          className="logo"
          src={data.file.childImageSharp.fixed.src}
          size='tiny' circular bordered alt={title} />
      </Link>
      <Menu fluid secondary>
        <Menu.Item position="left" fitted>
          <Menu.Item fitted>
            <Icon.Group>
              <Link to="/cart" className="cart-link">
                <Icon name="cart" size="large" className="shop-icon" />
                {_.isEmpty(cart) ? null : (
                  <Label
                    color="orange"
                    size="mini"
                    floating
                    circular
                    content={getCartItems(cart.products)}
                    className="cart-counter"
                  />
                )}
              </Link>
            </Icon.Group>
          </Menu.Item>
        </Menu.Item>
        <Menu.Item position="right" className="shop-name" fitted>
          {!isSearchVisible &&
            <Link to="/">
              {title}
            </Link>
          }
        </Menu.Item>
        <Menu.Item position="right" onClick={openMenu} fitted>
          <Icon name="content" size="large" onClick={openMenu} className="hamburger shop-icon" />
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NavBar
