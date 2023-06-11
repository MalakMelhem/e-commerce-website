import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import MuiDrawer from '../MuiDrawer/MuiDrawer';
import {useNavigate} from "react-router-dom";
import CartSidebar from '../CartSidebar/CartSidebar';

const Navbar = () => {
    return (
        <PrimarySearchAppBar />
    )
}
export default Navbar;


function PrimarySearchAppBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, pt: 2 }}>
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <MuiDrawer />
                    <Box component="div" className={style.navlink} sx={{ display: { xs: 'none', md: 'flex ' } }}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, color: "#000000", mr: 6 }}>
                        <IconButton size="large"
                            aria-label="account of current user"
                            aria-controls='primary-search-account-menu'
                            aria-haspopup="true"
                            color="inherit"
                            onClick={()=>navigate("/my-account")}
                        >
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <CartSidebar />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

