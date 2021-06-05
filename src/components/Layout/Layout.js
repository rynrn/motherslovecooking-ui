import React, { useState } from "react"
import {
  isBrowser
} from "react-device-detect";
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from 'semantic-ui-react';
import Footer from "../Footer/index"
import BrowserMenu from "./BrowserMenu"
import { CartProvider } from "../../context/cart"
import { Sidebar } from 'semantic-ui-react';
import SideMenu from '../../components/SideMenu/SideMenu';
import NavBar from "../NavBar/index"
import "../../styles/global.css"

const Layout = ({ children }) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isCartPage = pathname === '/cart';

  const data = useStaticQuery(graphql`
    query LayoutSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (isBrowser) {
    return (
      <CartProvider>
        <div id="layout" className="is-browser" style={{ height: '100%' }}>
          <BrowserMenu title={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </div>
      </CartProvider>
    );
  }
  else {
    const [isMenuOpen, setMenu] = useState(false);
    return (
      <CartProvider>
        <div id="layout" className="is-mobile" style={{ height: '100%' }}>
          <Sidebar.Pushable>
            <SideMenu isVisible={isMenuOpen} closeMenu={() => setMenu(false)} />
            <Sidebar.Pusher dimmed={isMenuOpen} onClick={() => isMenuOpen && setMenu(false)}>
              <NavBar title={data.site.siteMetadata.title} openMenu={() => setMenu(true)} />
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
          <Footer />
          {!isCartPage &&
            <Link to="/cart">
              <Button circular icon="cart" className="go-to-cart" aria-label="עגלת קניות" />
            </Link>
          }
        </div>
      </CartProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
