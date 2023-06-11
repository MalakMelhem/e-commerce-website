import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    ratingBox:{
        display:'flex',
        width:'fit-content',
        marginTop:'0.5em',
        marginBottom:'0.5em',

    },
    review:{
        color:'#9F9F9F',
        paddingLeft:'1em',
        borderLeft:'1px solid #9F9F9F',
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '20px',
        display:'flex',
        alignItems:'center',
    },
    ratingBasic:{
        marginRight:'0.5em',
    }
  }));
  export default useStyles;
