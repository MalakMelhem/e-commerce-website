import React,{useState} from 'react';
import { Box, Typography,FormControl,TextField,Checkbox,FormControlLabel} from '@mui/material';
import style from './LogIn.module.css';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import {Link} from 'react-router-dom';
import {useAuth} from "../AuthContext/AuthContext";
import Alert from '@mui/material/Alert';

const LogIn = () => {
  const {signIn, setPersistenceValue}=useAuth();
  const [error,setError]=useState({emailError:'',passwordError:'',other:''});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogIn= async(e)=>{
    e.preventDefault();
    if(!email){
      setError((prev)=>({...prev,emailError:'Please enter your email'}));
      
    }if(!password){
     return setError((prev)=>({...prev,passwordError:'Please enter your password'}));
     
    }
    if (email && password) {
      setPersistenceValue(rememberMe ? 'LOCAL' : 'SESSION');
    try{
      await signIn(email,password);
    }catch(e){
      setError({...error,other:e.message});
      
    } 
  }
  } 
  return (
    <Box className={style.logIn}>
      <Box className={style.alert}>
        {error.other && <Alert severity="error" >{error.other}</Alert>}
      </Box>
      <Typography component="h2" className={style.title}>LogIn</Typography>
      <FormControl>
          <Typography component="h4" className={style.descTitle}>Email address</Typography>
          <TextField type="email" className={style.textField} value={email} onChange={handleEmailChange} helperText={error.emailError} error={error.emailError.length?true:false}/>
          <Typography component="h4" className={style.descTitle} >Password</Typography>
          <TextField type="password" className={style.textField} value={password} onChange={handlePasswordChange} helperText={error.passwordError} error={error.passwordError.length?true:false} />
          <FormControlLabel control={<Checkbox />} label="Remember me"className={style.checkbox} onChange={handleRememberMeChange}/>
          <Box className={style.logInBox}>
            <CoreBasicBtn name="Log In" onClick={handleLogIn}/>
            <Link to="/lost-password">Lost Your Password?</Link>
          </Box>
      </FormControl>
    </Box>
  );
}

export default LogIn;