import React from 'react';
import { ShopApiServiceConsumer } from '../services-contexts';

const withShopApiService = () => (Wrapped) => {
  return (props) => {
    return (
      <ShopApiServiceConsumer>
        {
          (shopApiService) => {
            return (
              <Wrapped {...props}
                shopApiService={shopApiService} />
            )
          }
        }
      </ShopApiServiceConsumer>
    )
  }
}

export default withShopApiService;