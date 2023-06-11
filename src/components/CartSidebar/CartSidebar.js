import React, { useState,useContext,useEffect } from 'react';
import Box from '@mui/material/Box';
import useStyles from './CartSidebarStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartedProduct from '../CartedProduct/CartedProduct';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import { Divider, Drawer, Typography } from "@material-ui/core";
import CoreSmallBtn from '../CoreSmallBtn/CoreSmallBtn';
import { CartContext } from '../CartContext/CartContext';
import {useNavigate} from "react-router-dom";

const CartSidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { cartItems, calculateTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const classes=useStyles();
  return (
    <> 
        <IconButton size="large" color="inherit" edge="end" onClick={()=>setIsDrawerOpen(true)}>
                            <Badge badgeContent={cartItems.length} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
        </IconButton>
        <Drawer className={classes.drawer} anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box component="div" textAlign="left" className={classes.drawerContent} > 
              <Box className={classes.titleContent}>
                <Typography component="h2" className={classes.title}>Shopping Cart</Typography>
                <AddShoppingCartIcon className={classes.icon}/>
              </Box>
              <Box className={classes.CartContainer}>

                {cartItems.length ? cartItems.map((item,index)=> 
               <CartedProduct key={index} product={item}/>)
               :
               null
               } 
                
              </Box>
              <Box className={classes.tailContainer}>
                <Box className={classes.tailContent}>
                  <Typography component="h2">Subtotal</Typography>
                  <Typography component="h2" className={classes.price}>${cartItems.length && calculateTotal()}</Typography>
                </Box>
                  <Divider />
                <Box className={classes.btns}>
                  <CoreSmallBtn text="View Cart" onClick={()=>navigate('/cart')}/>
                  <CoreSmallBtn text="Checkout"/>
                </Box>
              </Box>
            </Box>
        </Drawer>
    </>
  );
}

export default CartSidebar;