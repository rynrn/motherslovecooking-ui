import React, { useEffect } from 'react';
import { throttle } from "lodash"
import { Link } from "gatsby"
import { Sidebar, Menu, Icon, Header } from 'semantic-ui-react';
import { siteMenu } from '../../constants/app.constants';

const handlePaddingTop = () => {
  const sidenavSite = document.querySelector('.sidenav-site');
  if (sidenavSite) {
    sidenavSite.style.paddingTop = document.querySelector('html').scrollTop + 'px';
  }
}

const SideMenu = (props) => {
  useEffect(() => {
    addEventListener('scroll', throttle(handlePaddingTop, 60));
    return removeEventListener('scroll', throttle(handlePaddingTop, 60))
  }, []);

  return (
    <Sidebar
      as={Menu}
      borderless
      direction="right"
      animation="overlay"
      width="thin"
      visible={props.isVisible}
      icon="labeled"
      vertical
      inverted
      color="pink"
    >
      <div className="sidenav-site">
        <Header as="h2" inverted>
          תפריט
      </Header>
        {siteMenu.map((item, index) => {
          return (
            <Link key={index} to={item.path} onClick={props.closeMenu}>
              <Menu.Item name={item.itemName}>
                <Icon name={item.icon} />{item.name}
              </Menu.Item>
            </Link>
          );
        })}
      </div>
    </Sidebar>
  );
}

export default SideMenu;
