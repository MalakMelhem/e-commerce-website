import React from 'react';
import { Drawer } from "@mui/material";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import style from './MuiDrawer.module.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="#000000"
                aria-label="open drawer"
                onClick={()=>setIsDrawerOpen(true)}
                sx={{ mr: 2, display: { xs: 'flex', md: 'none ' } }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box component="div" className={style.navlink} p={2} pl={4} width='250px' textAlign="left" >
                    <NavLink to="/"><HomeOutlinedIcon className={style.navIcon} />Home</NavLink>
                    <NavLink to="/shop"><StorefrontOutlinedIcon className={style.navIcon} />Shop</NavLink>
                    <NavLink to="/"><InfoOutlinedIcon className={style.navIcon}/>About</NavLink>
                    <NavLink to="/"><CallOutlinedIcon className={style.navIcon}/>Contact</NavLink>
                    <NavLink to="/my-account"><PersonOutlineOutlinedIcon className={style.navIcon}/>My Account</NavLink>
                    <NavLink to="/cart"><ShoppingCartOutlinedIcon className={style.navIcon}/>Cart</NavLink>
                </Box>

            </Drawer>
        </>
    )
}

export default MuiDrawer;