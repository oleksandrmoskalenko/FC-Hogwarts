import React from 'react';
import { HpApiServiceConsumer } from '../services-contexts';

const withHpApiService = () => (Wrapped) => {

  return (props) => {
    return (
      <HpApiServiceConsumer>
        {
          (hpApiService) => {
            return (
              <Wrapped {...props}
                hpApiService={hpApiService} />
            )
          }
        }
      </HpApiServiceConsumer>
    )
  }
}

export default withHpApiService;