import React from 'react';
import { DummyApiServiceConsumer } from '../services-contexts';

const withDummyApiService = () => (Wrapped) => {

  return (props) => {
    return (
      <DummyApiServiceConsumer>
        {
          (dummyApiService) => {
            return (
              <Wrapped {...props}
                dummyApiService={dummyApiService} />
            )
          }
        }
      </DummyApiServiceConsumer>
    )
  }
}

export default withDummyApiService;