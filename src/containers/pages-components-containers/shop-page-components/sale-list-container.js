import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFashionList, itemAddedToCart } from '../../../actions';
import { withShopApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import {
  SaleList
} from '../../../components/shop-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';

class SaleListContainer extends Component {

  componentDidMount() {
    this.props.fetchFashionList();
  }


  render() {
    const { fashionList, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <SaleList
      fashionList={fashionList}
      onAddedToCart={onAddedToCart} />
  }
};

const mapStateToProps = ({
  fashionShopList: { fashionList, loading, error }
}) => {
  return { fashionList, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { shopApiService } = ownProps;

  return bindActionCreators({
    fetchFashionList: fetchFashionList(shopApiService),
    onAddedToCart: itemAddedToCart
  }, dispatch);
};

export default compose(
  withShopApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(SaleListContainer);
