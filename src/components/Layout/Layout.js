import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Sidebar } from 'semantic-ui-react';
import SideMenu from '../../views/SideMenu';
import NavBar from "../NavBar/index"
import Footer from "../Footer/index"
import { CartProvider } from "../../context/cart"
import "../../styles/global.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setMenu] = useState(false);

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
      <div id="layout" style={{ height: '100%' }}>
        <Sidebar.Pushable>
          <SideMenu isVisible={isMenuOpen} closeMenu={() => setMenu(false)} />
          <Sidebar.Pusher dimmed={isMenuOpen} onClick={() => isMenuOpen && setMenu(false)}>
            <NavBar title={data.site.siteMetadata.title} openMenu={() => setMenu(true)} />
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </div>
    </CartProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
