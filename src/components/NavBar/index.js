import React, { useState } from 'react';
import { Link, Redirect, useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Segment, Icon, Label, Menu, Image } from 'semantic-ui-react';
import './NavBar.css';

const cart = [];
const getQuantity = () => 99

const NavBar = ({ title, openMenu }) => {
  const [isSearchVisible] = useState(false);
  const [toSearchPage] = useState(false);

  // function handleSubmit(e) {
  //   console.log('e: ', e);
  // }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "96icon_1512486555.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `)

  return (
    <Segment basic color="pink" inverted size="small" className="nav-bar">

      <Link to="/">
        <Image style={{
          verticalAlign: 'middle',
          position: 'absolute',
          top: '15px',
          left: '50%',
          transform: 'translateX(-50%)'
        }} src={data.file.childImageSharp.fixed.src}
          size='tiny' circular bordered alt={title} />
      </Link>
      <Menu fluid secondary>
        {/* <Menu.Item fitted>
          {isSearchVisible &&
            <Form onSubmit={handleSubmit}>
              <Input
                id="search"
                name="search"
                type="text"
                className="search"
                value={searchValue}
                // onChange={setSearchValue}
                placeholder="חיפוש..."
                autoFocus
                icon="search"
              />
            </Form>
          }
        </Menu.Item> */}
        <Menu.Item position="left" fitted>
          <Menu.Item fitted>
            {/* {isSearchVisible === false ?
              <Button icon="search" circular size="big" onClick={() => setSearchVisiblity(true)} />
              : null}
            {isSearchVisible &&
              <Icon name="close" size="large" className="shop-icon" onClick={() => setSearchVisiblity(false)} />
            } */}
            <Icon.Group>
              <Link to="/cart" className="cart-link">
                <Icon name="cart" size="large" className="shop-icon" />
                {_.isEmpty(cart) ? null : (
                  <Label
                    color="orange"
                    size="mini"
                    floating
                    circular
                    content={getQuantity()}
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
      {toSearchPage !== false && isSearchVisible ? <Redirect to={`/search/${toSearchPage}`} /> : null}
    </Segment>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NavBar
