import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    tabList:{
        display:'flex',
        justifyContent:'center',
        margin:'auto',
        color:'#9F9F9F',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '36px',
        width:'fit-content',
        '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
            color:'black',
          },
          '& .css-1aquho2-MuiTabs-indicator':{
            display:'none',
        } ,
       
    },
   
   
  }));
  export default useStyles;
