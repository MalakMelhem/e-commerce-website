import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    coreSmallBtn:{
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '18px',
        height: '31px',
        width: '131px',
        border: '1px solid #000000 !important',
        borderRadius: '50px !important',
        '&:hover':{
            backgroundColor:'#FBEBB5 !important',
        },
        marginRight:'2em !important',
    }
  }));
  export default useStyles;
