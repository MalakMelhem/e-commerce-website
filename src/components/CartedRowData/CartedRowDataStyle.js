import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    cartedRowData:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'95%',
        marginBottom: '0.5em',
    },
    imgData:{
        height: '106px',
        width:' 106px',
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius: '10px',
        backgroundColor:'#FBEBB5',
    },
    textData:{
        color:'#9F9F9F',
    },
    numOfProduct:{
        height: 'fit-content',
        borderRadius: '5px',
        '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
            height:'32px',
            width: '32px',
            padding:0,
            margin:0,
        },
        '& input[type=number]': {
            '-moz-appearance': 'textfield',
            padding:'2px',
            margin:0,
            textAlign:'center',
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin:0,
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin:0,

        },
    },
    
   
  }));
  export default useStyles;
