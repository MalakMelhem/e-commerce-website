import React,{useContext,useState } from 'react';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Typography,Snackbar  } from '@mui/material';
import useStyles from './CartedProductStyle';
import { CartContext } from '../CartContext/CartContext';

const CartedProduct = ({product}) => {
  const { removeFromCart } = useContext(CartContext);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleRemoveFromCart = (productId) => {
    setIsSnackbarOpen(true);
    setTimeout(() => {
      removeFromCart(productId);
    }, 250);
   
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

    const classes = useStyles(); 
  return (
    <Box className={classes.cartedProduct}>
       <Box className={classes.imgContainer}><img className={classes.img} src={product.items[0]} alt="carted product"/></Box> 
       <Box className={classes.contentInfo}>
          <Typography component="h2">{product.name}</Typography>
        <Box className={classes.amount}>
            <span className='count'> {product.quantity}</span> X<span className={classes.price}> $ {product.price}</span>
        </Box>
       </Box>
       <Box className={classes.delete}>
        <IconButton aria-label="delete" onClick={()=>handleRemoveFromCart(product.id)}>
            <HighlightOffIcon />
        </IconButton>
       </Box>
       <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isSnackbarOpen}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message="Item Removed From Cart!"
         />
    </Box>
  );
}

export default CartedProduct;