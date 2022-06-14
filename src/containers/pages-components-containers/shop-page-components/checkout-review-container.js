import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../../../components/shop-page-components/checkout/review';

class CheckoutReviewContainer extends Component {

  render() {
    const { products, total } = this.props;

    return <Review products={products} total={total} />
  }
};

const mapStateToProps = ({
  shoppingCart: { cartItems, orderTotal }
}) => {
  return {
    products: cartItems,
    total: orderTotal,
  };
};


export default connect(mapStateToProps)(CheckoutReviewContainer);
