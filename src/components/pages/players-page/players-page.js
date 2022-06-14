import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { Row } from '../../shared-components';

import {
  PlayerInfoContainer,
  PlayersListContainer
} from '../../../containers/pages-components-containers';

import PageTitle from '../title';

import './players-page.css'

const PlayersPage = () => {

  const title = 'players';

  const navigate = useNavigate();
  const { id } = useParams();

  const leftComponent = (
    <PlayersListContainer
      onItemSelected={(id) => {
        navigate(`${id + 1}`);
      }} />
  )

  const rightComponent = (
    <PlayerInfoContainer id={id} />
  )

  return (
    <div className='players-page'>
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
        <Typography color='text.primary'>Players</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <Row
        left={leftComponent}
        right={rightComponent} />
    </div>
  )
}

export default PlayersPage;