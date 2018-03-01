import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import Cards from './Cards';
  import Header from './Header';

class App extends Component {
  constructor (...args){
    super(...args)
  }
  render() {
    return (
     <Header/>,
     <Cards/> 
    )   
  }
}

export default App;
