import React from 'react';

import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';

import SaleListItem from '../sale-list-item';

import './sale-list.css';

const SaleList = ({ fashionList, onAddedToCart }) => {
  return (
    <Container className='sale-list'>
      <Grid container spacing={2}
        className='sale-list-grid'>
        {
          fashionList.map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4}
                className='sale-list-item' key={item.id}>
                <SaleListItem
                  item={item}
                  onAddedToCart={() => onAddedToCart(item.id)} />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}



export default SaleList;