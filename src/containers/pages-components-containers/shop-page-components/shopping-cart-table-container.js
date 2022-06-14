import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart
} from '../../../actions'

import { ShoppingCartTable } from '../../../components/shop-page-components';

class ShoppingCartTableContainer extends Component {

  render() {
    const { items, total,
      onIncrease, onDecrease, onDelete } = this.props;

    return <ShoppingCartTable
      items={items}
      total={total}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onDelete={onDelete} />
  }
};

const mapStateToProps = ({
  shoppingCart: { cartItems, orderTotal }
}) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: itemAddedToCart,
  onDecrease: itemRemovedFromCart,
  onDelete: allItemsRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);
