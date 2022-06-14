import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import {
  SouvenirsListContainer
} from '../../../../containers/pages-components-containers';

import './store-souvenirs-page.css';

const StoreSouvenirsPage = () => {

  const title = 'Official Store';

  return (
    <div className='store-souvenirs-page'>
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
        <Link to='/store/fashion'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          Store
        </Link>
        <Typography color='text.primary'>Souvenirs</Typography>
      </Breadcrumbs>

      <div className='col-12 col-md-6 page-title-block'>
        <h2 className='page-title store-page-title'>{title} Page</h2>
      </div>
      <h3 className='store-souvenirs-page-subtitle'>Souvenirs</h3>
      <SouvenirsListContainer />
      <div>
      </div>
    </div>
  );

}

export default StoreSouvenirsPage;