import React from 'react';

import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';

import SouvenirsListItem from '../souvenirs-list-item';

import './souvenirs-list.css';

const SouvenirsList = ({ fashionList, onAddedToCart }) => {
  return (
    <Container className='souvenirs-list'>
      <Grid container spacing={2}
        className='souvenirs-list-grid'>
        {
          fashionList.map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4}
                className='souvenirs-list-item' key={item.id}>
                <SouvenirsListItem
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



export default SouvenirsList;