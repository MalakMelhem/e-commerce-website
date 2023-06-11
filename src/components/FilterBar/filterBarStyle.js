import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    numOfProducts: {
      width:'55px',
      '& input[type=number]': {
        '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    }
    },
    menu:{
      width:'70%'
    }

       
  }));
  export default useStyles;
