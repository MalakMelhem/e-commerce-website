import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    pagination: {
        width: 'fit-content',
        margin:'auto',
        // border-radius: 10px;
        "& .MuiPaginationItem-root": {
            backgroundColor:'#FFF9E5',
            border:'none',
            width:'40px',
            height:'40px',
            marginRight:'1em'
          },
          "& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ": {
            backgroundColor:'#FBEBB5',
          } 
    },
   
  }));
  export default useStyles;