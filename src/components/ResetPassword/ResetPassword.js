import React ,{useState} from 'react';
import { Box, Typography,TextField} from '@mui/material';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import {useAuth} from "../AuthContext/AuthContext";
import style from './ResetPassword.module.css';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const ResetPassword = () => {
    const [email,setEmail]=useState('');
    const {resetPassword}=useAuth();
    const [error,setError]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handleReset= (e)=>{
        e.preventDefault();
        if(!email){
          return setError('Please enter your email');
        }
      resetPassword(email)
      .then(() => {
        setMessage('Password reset email sent successfully'); 
        })
      .catch((error) => {
        setError(`Error sending password reset email:${error}`);
         });
      }
      

  return (
    <Box className={style.reset}>
      <Box className={style.alert}>
        {error? <Alert severity="error" >{error}</Alert>: message &&<Alert severity="success">{message}</Alert>}   
      </Box>
      <Typography component="p" className={style.descTitle}>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</Typography>
          <Typography component="h4" className={style.title} >Email address</Typography>
          <TextField type="email" className={style.textField} value={email} onChange={handleEmailChange} />
          <Box className={style.btnBox} >
            <CoreBasicBtn name="Reset" onClick={handleReset}/>
            <IconButton aria-label="Back" onClick={()=>navigate('/my-account')} >
                <ArrowBackIcon />Back
           </IconButton>
          </Box>
    </Box>
  );
}

export default ResetPassword;