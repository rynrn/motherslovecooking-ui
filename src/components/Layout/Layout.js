import React, { useState } from "react"
import {
  BrowserView,
  MobileView,
  isMobile,
  isBrowser
} from "react-device-detect";
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from 'semantic-ui-react';
import Footer from "../Footer/index"
import MobileMenu from "./MobileMenu"
import BrowserMenu from "./BrowserMenu"
import { CartProvider } from "../../context/cart"
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

  return (
    <CartProvider>
      <div id="layout" className={isBrowser ? 'is-browser' : 'is-mobile'} style={{ height: '100%' }}>
        {!isBrowser &&
          <MobileMenu title={data.site.siteMetadata.title}>{children}</MobileMenu>
        }
        {isBrowser && <BrowserMenu title={data.site.siteMetadata.title} />}
        {children}
        <Footer />
        {!isCartPage && isMobile &&
          <Link to="/cart">
            <Button circular icon="cart" className="go-to-cart" aria-label="עגלת קניות" />
          </Link>
        }
      </div>
    </CartProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
