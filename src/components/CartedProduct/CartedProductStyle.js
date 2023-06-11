import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    cartedProduct:{
        display:'flex',
        alignItems:'center',
        marginBottom:'1em',
    },
    imgContainer:{
        height:'105px',
        width: '105px',
        borderRadius: '10px',
        backgroundColor:'#FBEBB5'
    },
    img:{
        height:'100%',
        width:'100%',
    },
    contentInfo:{
        marginLeft:'1em',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    amount:{
        marginTop:'0.5em',
    },
    price:{
        color:'#B88E2F',
    },
    delete:{
        width:'fit-content',
        height:'fit-content',
        marginLeft:'1em',
    }
  }));
  export default useStyles;
