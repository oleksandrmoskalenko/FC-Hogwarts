import * as React from 'react';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({ products, total }) {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <div className='checkout-product-block'>
              <img src={product.image} alt={product.id}
                className='checkout-product-img' />
              <div className='checkout-product-wrapper'>
                <p className='checkout-product-title '>{product.title}</p>
                <p className='checkout-product-text'>
                  {product.price}$ x {product.count} =
                  <span className='checkout-product-text checkout-product-text__bold'>{product.total}$</span>
                </p>
              </div>
            </div>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <div className='checkout-product-block checkout-product-block__total'>
            <p className='checkout-product-text checkout-product-text__total'>
              Total:
            </p>
            <Typography variant='subtitle1'
              sx={{ fontWeight: 700, fontSize: '22px' }}>
              {total}$
            </Typography>
          </div>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}