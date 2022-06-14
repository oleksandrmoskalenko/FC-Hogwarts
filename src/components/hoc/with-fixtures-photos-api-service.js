import React from 'react';
import { FixturesPhotosApiServiceConsumer } from '../services-contexts';

const withFixturesPhotosApiService = () => (Wrapped) => {

  return (props) => {
    return (
      <FixturesPhotosApiServiceConsumer>
        {
          (fixturesPhotosApiService) => {
            return (
              <Wrapped {...props}
                fixturesPhotosApiService={fixturesPhotosApiService} />
            )
          }
        }
      </FixturesPhotosApiServiceConsumer>
    )
  }
}

export default withFixturesPhotosApiService;