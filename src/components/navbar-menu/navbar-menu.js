import React, { useState } from 'react';

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import { ShoppingCartModal } from '../shop-page-components';

import { ShoppingBasketContainer } from '../../containers/navbar-containers';

import './navbar-menu.css';

const NavbarMenu = () => {

  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const closeShoppingCartModal = () => setShowShoppingCart(false);
  const showShoppingCartModal = () => setShowShoppingCart(true);

  const navigate = useNavigate();

  const proceedToCheckout = () => {
    closeShoppingCartModal();
    navigate(`/checkout`);
  }

  return (
    <>
      <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <span className='navbar-menu-logo'>
              HOGWARTS FC
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/news'>News</Nav.Link>
              <Nav.Link as={Link} to='/matches'>Matches</Nav.Link>
              <Nav.Link as={Link} to='/teams'>Teams</Nav.Link>
              <Nav.Link as={Link} to='/players'>PLayers</Nav.Link>
              <Nav.Link as={Link} to='/tickets'>Tickets &#38; Booking</Nav.Link>
              <NavDropdown title='Shop' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to='/store/fashion'>Fashion</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/store/souvenirs'>Souvenirs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/store/player'>Player</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/store/sale'>Sale</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='More' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to='/more/mock-teams'>More</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/more'>More item 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/more'>More item 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className='navbar-shopping-basket-wrapper'>
            <Button bg='none' variant='primary'
              onClick={showShoppingCartModal}
              className='navbar-shopping-basket'>
              <ShoppingBasketContainer />
            </Button>
          </div>
        </Container>
      </Navbar>

      <ShoppingCartModal
        show={showShoppingCart}
        closeModal={closeShoppingCartModal}
        showCheckout={proceedToCheckout} />
    </>
  )
}

export default NavbarMenu;