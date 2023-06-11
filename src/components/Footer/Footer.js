import React from 'react';
import style from './Footer.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const Footer = () => {
  return (
    <Box className={style.footer}>
        <Box className={style.footerBody}>
            <Box>
                <Typography component="p">400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA</Typography>
            </Box>
            <Box>
                <Typography component="h3">Links</Typography>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </Box>
            <Box>
                <Typography component="h3">Help</Typography>
                <ul>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </Box>
            <Box>
                <Typography component="h3">Newsletter</Typography>
                <input className={style.email} type="email" name="email"  placeholder="Enter Your Email Address" />
                <input className={style.subscribe} type="submit" value="SUBSCRIBE" />
            </Box>
            </Box>
        <Box className={style.footerTail}>
            <Typography component="p">2022 Meubel House. All rights reverved</Typography>
        </Box>
    </Box>
  );
}

export default Footer;