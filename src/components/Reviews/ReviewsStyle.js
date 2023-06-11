import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    userAvatar:{
        marginRight:'0.5em'
    },
    commentTextField:{
        width:'50%',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
        },
    },
    commentSection:{
        display:'flex',
        flexDirection:'column',
    },
    commentBtn:{
        backgroundColor:'#FBEBB5',
        width:'20%',
        marginTop:'1.5em',
        '&:hover': {
            backgroundColor:'#ffb366',
          },
        [theme.breakpoints.down('xs')]: {
            width:'fit-content',
        },
    }
  }));
  export default useStyles;
