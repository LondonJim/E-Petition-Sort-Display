import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>Randomized Government Petitions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    )
  }

}

export default Header
