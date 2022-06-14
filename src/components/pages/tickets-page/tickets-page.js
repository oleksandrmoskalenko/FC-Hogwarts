import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import PageTitle from '../title';

import './tickets-page.css';

const TicketsPage = () => {

  const title = 'tickets';

  return (
    <div className='tickets-page'>
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
        <Typography color='text.primary'>Tickets &#38; Booking</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <div>Tickets text</div>
      <div className='tickets-page-block'></div>
    </div>
  )
}

export default TicketsPage;