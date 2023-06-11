import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  drawer:{
    '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper':{
      height:'90%',
    }
  },
  drawerContent:{
    width:'370px',
    height:'100%',
    position:'relative',
  },
  titleContent:{
    display:'flex',
    justifyContent:'space-between',
    margin:'1.5em',
    paddingBottom:'1.5em',
    borderBottom:'1px solid #D9D9D9',
    position:'relative',
    boxSizing:'border-box',
  },
  title:{
    fontSize: '24px',
    fontWeight:'600',
    lineHeight: '36px',
  },
  icon:{
    color:'#9F9F9F',
    position:'absolute',
    right:'0',
  },
  CartContainer:{
    margin:'1.5em',
    overflowY:'auto',
    height:'50%',
  },
  tailContent:{
    display:'flex',
    justifyContent:'space-between',
    margin:'1.5em',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  price:{
    color:'#B88E2F', 
  },
  btns:{
    display:'flex',
    justifyContent:'space-between',
    margin:'1.5em',
    
  },
  
  tailContainer:{
    position:'absolute',
    bottom:0,
  }
    
  }));
  export default useStyles;
