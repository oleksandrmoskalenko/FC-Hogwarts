import React from 'react';

import { Toast } from 'react-bootstrap';

import './shopping-cart-toast.css';

const ShoppingCartToast = ({ show, closeToast }) => {
  return (
    <Toast className='d-inline-block m-1 store-page-toast' bg='success'
      onClose={closeToast} show={show}
      delay={3000} autohide>
      <Toast.Body className='store-page-toast-text'>
        Item successfully added to cart!
      </Toast.Body>
    </Toast>
  )
}

export default ShoppingCartToast;