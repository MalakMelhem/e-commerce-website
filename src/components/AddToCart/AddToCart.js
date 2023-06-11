import React from 'react';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import { useState,useContext } from 'react';
import { Box, Snackbar } from '@mui/material';
import { CartContext } from '../CartContext/CartContext';



const AddToCart = ({product,quantity,setQuantity}) => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const { addToCart } = useContext(CartContext);


    const handleAddToCart = (product,quantity) => {
        if(quantity==0)return;
        addToCart(product,quantity);
        setIsSnackbarOpen(true);
        setQuantity(1);
      };
    
      const handleSnackbarClose = () => {
        setIsSnackbarOpen(false);
      };

  return (
    <Box>
         <CoreBasicBtn name="AddToCart" onClick={()=>handleAddToCart(product,quantity)}/>
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isSnackbarOpen}
            autoHideDuration={1000}
            onClose={handleSnackbarClose}
            message="Item added to cart!"
         />
    </Box>
  );
}

export default AddToCart;