import { Box, Typography,TextField,Snackbar } from '@mui/material';
import React,{useState,useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../CartedProduct/cpImg/Asgaardsofa5.png';
import useStyles from './CartedRowDataStyle';
import { CartContext } from '../CartContext/CartContext';

const CartedRowData = ({product}) => {
    const [value,setValue]=useState(product.quantity);
    const { removeFromCart,calculateSubtotal , updateQuantity} = useContext(CartContext);
    const subtotal=calculateSubtotal(product);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleQuantityChange = (productId,quantity) => {
        if (quantity==0){
          handleRemoveFromCart(productId);
        }
        updateQuantity(productId,quantity);
      };

    const handleRemoveFromCart = (productId) => {
        setIsSnackbarOpen(true);
        setTimeout(() => {
          removeFromCart(productId);
        }, 250);
        
      };

      const handleSnackbarClose = () => {
        setIsSnackbarOpen(false);
      };
   
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const classes = useStyles(); 
  return (
    <Box className={classes.cartedRowData}>
        <Box className={classes.imgData}><img className={classes.img} src={product.items[0]} alt='carted product image' /></Box>
        <Typography component="h2" className={classes.textData}>{product.name}</Typography>
        <Typography component="h2" className={classes.textData}>$ {product.price}</Typography>
        
        <TextField className={classes.numOfProduct} id="outlined-number" value={value}  onChange={handleChange} onBlur={()=>handleQuantityChange(product.id,value)}   type="number"  InputLabelProps={{shrink: true,}}/>
        
        <Typography component="h2">$ {subtotal}</Typography>
        <Box >
        <IconButton aria-label="delete" onClick={()=>handleRemoveFromCart(product.id)} style={{ color: '#FBEBB5' }}>
            <DeleteIcon />
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
  )
}

export default CartedRowData;