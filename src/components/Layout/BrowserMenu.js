import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, Image, Icon } from 'semantic-ui-react';
import { siteMenu } from '../../constants/app.constants';
import { useCart } from "../../context/cart"
import './BrowserMenu.css';

const BrowserMenu = ({ title }) => {
  const [cart] = useCart(false);
  const { totalProductsQuantity } = cart;
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
  `);

  return (
    <div dir="rtl" id="browser-menu">
      <Menu text>
        {siteMenu.map((item, index) => {
          if (!item.path) return;
          return (
            <Link activeClassName="active" key={index} to={item.path}>
              <Menu.Item name={item.itemName}>
                {item.name}
              </Menu.Item>
            </Link>
          );
        })}

      </Menu>
      <Link id="logo-link" to="/">
        <Image className="logo"
          src={data.file.childImageSharp.fixed.src}
          size='tiny' circular bordered alt={title} />
      </Link>
      <Link id="cart-button-menu" to="/cart">
        <Menu.Item name="cart">
          <Icon name="shopping basket" />
          <div className="cart-number">{totalProductsQuantity}</div>
        </Menu.Item>
      </Link>
      {/* <Link id="cart-button-menu" to="/">
        <Image style={{
          verticalAlign: 'middle',
          position: 'absolute',
          top: '8px',
          left: '50%',
          zIndex: '2',
          transform: 'translateX(-50%)'
        }}
          className="logo"
          src={data.file.childImageSharp.fixed.src}
          size='tiny' circular bordered alt={title} />
      </Link> */}
    </div>
  )
}

export default BrowserMenu;
