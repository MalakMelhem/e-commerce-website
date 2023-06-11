import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    select: {
      height:'55px',
      width:'188px',
      [theme.breakpoints.down('sm')]: {
        width:'100%',
      },
    },
  }));
  export default useStyles;
