import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

import {
  ErrorBoundary,
  ScrollToTop
} from './components/shared-components';

import {
  DummyApiServiceProvider,
  HpApiServiceProvider,
  ShopApiServiceProvider,
  NewsApiServiceProvider,
  FixturesPhotosApiServiceProvider,
} from './components/services-contexts';

import store from './store';

import './bootstrap.min.css';
import './index.css';

import DummyApiService from './services/dummy-api-service';
import HpApiService from './services/hp-api-service';
import NewsApiService from './services/news-api-service';
import ShopApiService from './services/shop-api-service';
import FixturesPhotosApiService from './services/fixtures-photos-api-service';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const dummyApiService = new DummyApiService();
const hpApiService = new HpApiService();
const newsApiService = new NewsApiService();
const shopApiService = new ShopApiService();
const fixturesPhotosApiService = new FixturesPhotosApiService();

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <DummyApiServiceProvider value={dummyApiService}>
      <ShopApiServiceProvider value={shopApiService}>
        <HpApiServiceProvider value={hpApiService}>
          <NewsApiServiceProvider value={newsApiService}>
            <FixturesPhotosApiServiceProvider value={fixturesPhotosApiService}>
              <Router>
                <ScrollToTop />
                <App />
              </Router>
            </FixturesPhotosApiServiceProvider>
          </NewsApiServiceProvider>
        </HpApiServiceProvider>
      </ShopApiServiceProvider>
      </DummyApiServiceProvider>
    </ErrorBoundary>
  </Provider>
);