import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import PageTitle from '../../title';

import './more-page.css';

const MorePage = () => {

  const title = 'more';

  return (
    <div className='more-page'>
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
        <Typography color='text.primary'>More</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <div>More text</div>
      <div className='more-page-block'></div>
    </div>
  )
}

export default MorePage;