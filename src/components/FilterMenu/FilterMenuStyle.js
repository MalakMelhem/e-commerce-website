import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    filterMenu:{
        margin:'1em 2em'
    },
    selectfilterMenu: {
        width:'50%',
    },
    select:{
        marginBottom:'1em'
    },
    tagesContainer:{
        display:'flex',
        flexWrap:'wrap',
    },
    checkbox:{
        '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked':{
            color:'#ffb366'
        }
    },
    filterBtn:{
        backgroundColor:'#ffb366',
        marginTop:'1em',
        '&:hover': {
            backgroundColor:'#ffb366',
          }
    }    
  }));
  export default useStyles;
