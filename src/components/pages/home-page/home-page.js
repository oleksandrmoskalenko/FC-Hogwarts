import React, { Component } from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import {
  HomePageSliderContainer,
  HomePageScrollBarContainer
} from '../../../containers/pages-components-containers';

import ShopApiService from '../../../services/shop-api-service';

import PageTitle from '../title';

import './home-page.css';


export default class HomePage extends Component {

  shopApiService = new ShopApiService();

  componentDidMount() {
    this.shopApiService.getAllProducts()
      .then(body => console.log(body));
  }

  render() {
    const title = 'home';

    return (
      <div className='home-page'>
        <Breadcrumbs aria-label='breadcrumb' separator='›'
          sx={{ m: '15px 0 30px 20px' }}>
          <Typography color='text.primary'
            style={{
              display: 'flex', alignItems: 'center',
              textDecoration: 'none', color: 'inherit'
            }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            Home
          </Typography>
        </Breadcrumbs>

        <PageTitle title={title} />
        <HomePageSliderContainer />
        <HomePageScrollBarContainer />
      </div >
    );
  }
};