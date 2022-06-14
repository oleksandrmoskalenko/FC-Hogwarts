import React from 'react';

import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';

import PlayerListItem from '../player-list-item';

import './player-list.css';

const PlayerList = ({ fashionList, onAddedToCart }) => {
  return (
    <Container className='player-list'>
      <Grid container spacing={2}
        className='player-list-grid'>
        {
          fashionList.map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4}
                className='player-list-item' key={item.id}>
                <PlayerListItem
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



export default PlayerList;