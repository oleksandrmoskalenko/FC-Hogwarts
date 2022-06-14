import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import { SearchPanel } from '../../../teams-page-components';
import MockTeamsPageDropDown from './mock-teams-page-dropdown';

import {
  MockTeamCardsListContainer
} from '../../../../containers/pages-components-containers';

import PageTitle from '../../title';

import './mock-teams-page.css';

const MockTeamsPage = ({ visibleItems, onSearchChange, onFilterChange }) => {

  const title = 'mock-teams';

  return (
    <div className='mock-teams-page'>
      <Breadcrumbs aria-label='breadcrumb' separator='›'
        sx={{ m: '15px 0 30px 20px' }}>
        <Link to='/'
          style={{
            display: 'flex', alignItems: 'center',
            textDecoration: 'none', color: 'inherit'
          }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Home
        </Link>
        <Typography color='text.primary'>Mock Teams</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <div className='mock-teams-page-block'>
        <div className='mock-teams-page-wrapper'>
          <SearchPanel
            onSearchChange={onSearchChange} />
          <MockTeamsPageDropDown
            onFilterChange={onFilterChange} />
        </div>
        <MockTeamCardsListContainer visibleItems={visibleItems} />
      </div>
    </div>
  )
}

export default MockTeamsPage;