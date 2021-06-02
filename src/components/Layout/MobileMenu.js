import React, { useState } from "react";
import { Sidebar } from 'semantic-ui-react';
import SideMenu from '../../components/SideMenu/SideMenu';
import NavBar from "../NavBar/index"

const MobileMenu = ({ children, title }) => {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <Sidebar.Pushable>
      <SideMenu isVisible={isMenuOpen} closeMenu={() => setMenu(false)} />
      <Sidebar.Pusher dimmed={isMenuOpen} onClick={() => isMenuOpen && setMenu(false)}>
        <NavBar title={title} openMenu={() => setMenu(true)} />
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default MobileMenu;
