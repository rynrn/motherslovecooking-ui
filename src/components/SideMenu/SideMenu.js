import React from 'react';
import { Link } from "gatsby"
import { Sidebar, Menu, Icon, Header } from 'semantic-ui-react';
import { siteMenu } from '../../constants/app.constants';

const SideMenu = (props) => (
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
    {/* <Link to="/" onClick={props.closeMenu}>
      <Menu.Item name="home">
        <Icon name="home" />בית
      </Menu.Item>
    </Link>
    <Link to="/products" onClick={props.closeMenu}>
      <Menu.Item name="ordering">
        <Icon name="search" />חיפוש מנות
      </Menu.Item>
    </Link>
    <Link to="/categories" onClick={props.closeMenu}>
      <Menu.Item name="categories">
        <Icon name="browser" />קטגוריות
      </Menu.Item>
    </Link>
    <Link to="/cart" onClick={props.closeMenu}>
      <Menu.Item name="ordering">
        <Icon name="shopping basket" />עגלת קניות
      </Menu.Item>
    </Link> */}
    {/*
    <Menu.Item name="service">
      <Icon name="setting" />Customer Service
    </Menu.Item>
    <Menu.Item name="shipping">
      <Icon name="truck" />Shipping
    </Menu.Item>
    <Menu.Item name="locations">
      <Icon name="marker" />Locations
    </Menu.Item>
    <Menu.Item name="contact">
      <Icon name="envelope" />Contact
    </Menu.Item>
    <Menu.Item name="account">
      <Icon name="user" />User Account
    </Menu.Item>
    */}
  </Sidebar>
);

export default SideMenu;
