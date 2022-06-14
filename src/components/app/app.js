import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import {
  HomePage,
  MatchesPage,
  MorePage,
  StoreFashionPage,
  StoreSouvenirsPage,
  StorePlayerPage,
  StoreSalePage,
  TicketsPage,
  PlayersPage,
  CheckoutPage
} from '../pages';

import {
  NewsPageContainer,
  TeamsPageContainer,
  MockTeamsPageContainer
} from '../../containers/pages-containers';

import {
  NewsArticleContainer
} from '../../containers/pages-components-containers';

import './app.css';

const App = () => {
  return (
    <div className='hogwarts-fc-app container'>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news/' element={<NewsPageContainer />} />
        <Route path='/news/articles' element={<NewsArticleContainer />} >
          <Route path=':id' element={<PlayersPage />} />
        </Route>
        <Route path='/matches' element={<MatchesPage />} />
        <Route path='/teams' element={<TeamsPageContainer />} />
        <Route path='/players' element={<PlayersPage />}>
          <Route index element={<PlayersPage />} />
          <Route path=':id' element={<PlayersPage />} />
        </Route>
        <Route path='/tickets' element={<TicketsPage />} />
        <Route path='/store/fashion' element={<StoreFashionPage />} />
        <Route path='/store/souvenirs' element={<StoreSouvenirsPage />} />
        <Route path='/store/player' element={<StorePlayerPage />} />
        <Route path='/store/sale' element={<StoreSalePage />} />
        <Route path='/more/mock-teams' element={<MockTeamsPageContainer />} />
        <Route path='/more' element={<MorePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      <AppFooter />
    </div>
  )
}

export default App;