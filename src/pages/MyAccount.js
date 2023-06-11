import { Box } from '@mui/material';
import React from 'react';
import HeaderCover from '../components/HeaderCover/HeaderCover';
import PurchasingBanner from '../components/PurchasingBanner/PurchasingBanner';
import Access from '../components/Access/Access';
import Account from '../components/Account/Account';
import {useAuth} from "../components/AuthContext/AuthContext";

const MyAccount = () => {
  const {currentUser}=useAuth();
 
  return (
    <Box>
        <HeaderCover currentPage="My Account" /> 
        {currentUser? <Account /> : <Access />}
        <PurchasingBanner />
    </Box>
  );
}

export default MyAccount;