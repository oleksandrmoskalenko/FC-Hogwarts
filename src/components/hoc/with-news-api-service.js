import React from 'react';
import { NewsApiServiceConsumer } from '../services-contexts';

const withNewsApiService = () => (Wrapped) => {

  return (props) => {
    return (
      <NewsApiServiceConsumer>
        {
          (newsApiService) => {
            return (
              <Wrapped {...props}
                newsApiService={newsApiService} />
            )
          }
        }
      </NewsApiServiceConsumer>
    )
  }
};

export default withNewsApiService;