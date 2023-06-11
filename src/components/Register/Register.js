import React, { useState} from 'react';
import style from './Register.module.css';
import { Box, Typography,FormControl,TextField} from '@mui/material';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import {useAuth} from "../AuthContext/AuthContext";
import Alert from '@mui/material/Alert';


const Register = () => {
  const {signup,resetPassword}=useAuth();
  const [error,setError]=useState('');
  const [message,setMessage]=useState('');
  const [email,setEmail]=useState('');
  const [open, setOpen] = useState(true);

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
 

  const handleRegister= (e)=>{
    e.preventDefault();
    if(!email){
      return setError('Please enter your email');
    }
    signup(email)
    .then(() => {
      resetPassword(email)
      .then(() => {
        setMessage('User created successfully');
         
        })
      .catch((error) => {
        setError(`Error sending password reset email:${error}`);
         });
  })
  .catch((error) => {
    setError(`Error creating user:${error}`);
  });
          
  }
  return (
    <Box className={style.register}>
      <Box className={style.alert}>
        {message && (open&&<Alert severity="success" onClose={() => setOpen(false)}>{message}</Alert>)}
      </Box>
      <Typography component="h2" className={style.title}>Register</Typography>
      <FormControl >
          <Typography component="h4" className={style.descTitle}>Email address</Typography>
          <TextField type="email" className={style.textField}  value={email} onChange={handleEmailChange}  helperText={error} error={error.length?true:false}/>
          <Typography component="p">A link to set a new password will be sent to your email address.</Typography>
          <Typography component="p">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<b> privacy policy.</b></Typography>
          <Box className={style.btnBox}>
            <CoreBasicBtn name="Register" onClick={handleRegister}/>
          </Box>
      </FormControl>
    </Box>
  );
}

export default Register;