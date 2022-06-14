import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import { ShoppingCartTableContainer } from '../../../containers/pages-components-containers';

import './shopping-cart-modal.css'

const ShoppingCartModal = ({ show, closeModal, showCheckout }) => {

  return (
    <Modal show={show} onHide={closeModal} size='xl'
      className='navbar-shopping-basket-modal'>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Select a number of items in our shop!
        <ShoppingCartTableContainer />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={closeModal}
          className='shopping-cart-modal-btn shopping-cart-modal-btn__secondary'>
          Close
        </Button>
        <Button variant='primary' onClick={showCheckout}
          className='shopping-cart-modal-btn'>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShoppingCartModal;