import React,{useState} from 'react';
import { Box, Typography,TextField} from '@mui/material';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import style from './Account.module.css';
import {useAuth} from "../AuthContext/AuthContext";
import Alert from '@mui/material/Alert';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const Account = () => {
    const {currentUser,logout,updateUserEmail,updateUserPassword}=useAuth();
    const [error,setError]=useState('');
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [message,setMessage]=useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
      };

      const handleSubmit= (e)=>{
        e.preventDefault();
        if(password || passwordConfirm===''){
          return setError('Please enter your password');
        }
        if(password!==passwordConfirm){
           return setError('Passwords do not match');
        }
        updateUserEmail(email)
        .then(() => {
            updateUserPassword(password)
            .then(() => {
                setMessage('Account updated');
               
              })
            .catch((error) => {
              setError(`Failed to update user password:${error}`);
               });
        })
        .catch((error) => {
          setError(`Failed to update user email:${error}`);
        });   
       
      }

  return (
    <Box className={style.account}>
      <Box className={style.alert}>
        {error? <Alert severity="error" >{error}</Alert>: message &&<Alert severity="success">{message}</Alert>}   
      </Box>
      <Typography component="h2" className={style.title}>Account Details</Typography>
          <Typography component="h4" className={style.descTitle}>Email address</Typography>
          <TextField type="email" className={style.textField} value={email} onChange={handleEmailChange} />
          <Typography component="h4" className={style.descTitle}>Password</Typography>
          <TextField type="password" className={style.textField} value={password} onChange={handlePasswordChange}/>
          <Typography component="h4" className={style.descTitle} >Confirm Password</Typography>
          <TextField type="password" className={style.textField} value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
          <Box className={style.accountBtn}>
            <CoreBasicBtn name="Save changes" onClick={handleSubmit}/>
            <IconButton aria-label="Logout" onClick={logout} >
                <LogoutIcon />Logout
           </IconButton>
          </Box>
    </Box>
    
  );
}

export default Account;