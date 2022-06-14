import React, { Component } from 'react';
import { connect } from 'react-redux';

import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

class ShoppingBasketContainer extends Component {
  render() {
    const { total } = this.props;
    return (
      <Badge color='error' badgeContent={total}>
        <ShoppingBasketIcon />
      </Badge>
    )
  }
}

const mapStateToProps = ({ shoppingCart: { itemsTotal } }) => {
  return {
    total: itemsTotal,
  };
};

export default connect(mapStateToProps)(ShoppingBasketContainer);
