import React, { Fragment, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { useNavigate } from 'react-router-dom';

import ShoppingCartModal from '../shopping-cart-modal';
import ShoppingCartToast from '../shopping-cart-toast';

import './player-list-item.css';

const PlayerListItem = ({ item, onAddedToCart }) => {

  const { title, price, image, category, description } = item;

  const [showToast, setShowToast] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const closeShoppingCartModal = () => setShowShoppingCart(false);
  const showShoppingCartModal = () => setShowShoppingCart(true);

  const showShoppingCartToast = () => setShowToast(true);
  const closeShoppingCartToast = () => setShowToast(false);

  const navigate = useNavigate();

  const addToCart = () => {
    onAddedToCart();
    showShoppingCartModal();
    showShoppingCartToast();
  };

  const proceedToCheckout = () => {
    closeShoppingCartModal();
    navigate(`/checkout`);
  }

  return (
    <Fragment>
      <PopupState variant='popover' popupId='demo-popup-popover'>
        {(popupState) => (
          <div>
            <Card
              sx={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className='fashion-list-item-card'>
              <CardActionArea {...bindTrigger(popupState)}
                sx={{ display: 'flex', flexDirection: 'column' }}>
                <div className='fashion-list-item-wrapper'>
                  <CardMedia
                    sx={{ alignSelf: 'center', maxHeight: '170px', width: 'auto', maxWidth: '80%' }}
                    component='img'
                    image={image}
                    alt={category}
                  />
                </div>
                <CardContent sx={{ width: '100%' }}>
                  <Typography sx={{ fontSize: '16px' }} mb={5}
                    variant='body2' height={90}
                    className='fashion-list-item-title'>
                    {title}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'
                    sx={{ fontWeight: 'bold' }}>
                    {price} $
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{
                width: '100%', display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  className='btn btn-primary fashion-list-item-button'
                  onClick={addToCart}>
                  Add to cart
                </button>
              </CardActions>
            </Card>
            <Popover sx={{ width: '300px' }}
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2, width: '240px', fontSize: '13px' }}>
                {description}
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>

      <ShoppingCartModal
        show={showShoppingCart}
        closeModal={closeShoppingCartModal}
        showCheckout={proceedToCheckout} />

      <ShoppingCartToast
        show={showToast}
        closeToast={closeShoppingCartToast} />
    </Fragment >
  )
}

export default PlayerListItem;

