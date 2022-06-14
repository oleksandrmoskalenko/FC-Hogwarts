import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import { SearchPanel } from '../../teams-page-components';
import TeamsPageDropDown from './teams-page-dropdown';

import {
  TeamCardsListContainer
} from '../../../containers/pages-components-containers';

import PageTitle from '../title';

import './teams-page.css';

const TeamsPage = ({ visibleItems, onSearchChange, onFilterChange }) => {

  const title = 'teams';

  return (
    <div className='teams-page'>
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
        <Typography color='text.primary'>Teams</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <div className='teams-page-block'>
        <div className='teams-page-wrapper'>
          <SearchPanel
            onSearchChange={onSearchChange} />
          <TeamsPageDropDown
            onFilterChange={onFilterChange} />
        </div>
        <TeamCardsListContainer visibleItems={visibleItems} />
      </div>
    </div>
  )
}

export default TeamsPage;