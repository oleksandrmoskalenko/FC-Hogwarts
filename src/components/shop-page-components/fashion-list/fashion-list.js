import React from 'react';

import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';

import FashionListItem from '../fashion-list-item';

import './fashion-list.css';

const FashionList = ({ fashionList, onAddedToCart }) => {

  return (
    <Container className='fashion-list'>
      <Grid container spacing={2}
        className='fashion-list-grid'>
        {
          fashionList.map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4}
                className='fashion-list-item' key={item.id}>
                <FashionListItem
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



export default FashionList;