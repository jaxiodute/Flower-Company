import React,{useState,useEffect} from 'react'
import { Toolbar,AppBar,Tabs,Tab,Menu,MenuItem,useMediaQuery,useTheme,Typography,
SwipeableDrawer,IconButton,List,ListItem,ListItemText,Grid, Button} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme=>({
    brand:{
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px",
        fontWeight:500,
        
        verticalAlign:"top",

        [theme.breakpoints.up("lg")]:{
            marginRight:"auto",
            marginLeft:"auto",
            marginTop:"1em",
        },

        
        
        
    },
    brandAlign:{
        verticalAlign:"top",
        display:"inline",

    },
    tabContainer:{
        marginLeft:"auto",
        marginRight:"auto",
    },
    tab:{
        fontWeight:200,
        color:"#212121",
        
    },
    toolbarMargin:{
        ...theme.mixins.toolbar,
        [theme.breakpoints.up("lg")]:{
            marginTop:"2.5em",
        },
        
    },

    drawerIcon:{
        height:"35px",
        width: "35px",
    },
    drawerIconContainer:{
        zIndex:1300,
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    drawer:{
     backgroundColor:theme.palette.common.white,
    },
    drawerItem:{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:500,
        color:"#212121",

    },
    button:{
        padding:"4px",
        fontSize:"12px",
        borderRadius:0,
        backgroundColor:"#FCC6E2",
        fontFamily: "'Montserrat', sans-serif",
        color:theme.palette.common.black,
        fontWeight:500,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light,
            color:"white"
        }
    }
    
   }));


export default function Header()
{
    const classes=useStyles();
    const theme=useTheme();

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value,setValue]=React.useState(0);
    const [anchorEl,setAnchorEl]=useState(null);
    const [selectedDrawerIndex, setSelectedDrawerIndex] = React.useState(0);
    const [openDrawer,setOpenDrawer] = useState(false);

    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const handleChange = (e,newvalue)=>{
        setValue(newvalue);
        setSelectedDrawerIndex(newvalue);
    }

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
    }

    const handleClose=(e)=>{
        setAnchorEl(null);
    }

    const handleDrawerItemClick =(event,index) =>{
        setSelectedDrawerIndex(index);
        setValue(index);
    }

      const drawerRoutes = [
        {name:'HOME',link:'/'},
        {name:'BIRTHDAY COLLECTIONS',link:'/birthdaycollections'},
        {name:'ANNIVERSARY COLLECTIONS',link:'/anniversarycollections'},
        {name:'NEW ARRIVALS',link:'/newarrivals'},
        {name:'OUR COLLECTION',link:'/luxurycollections'},
      ];

    useEffect(()=>{
        switch(window.location.pathname)
        {
            case "/":
                if(value !== 0)
                {
                    setValue(0);
                    setSelectedDrawerIndex(0);
                }
                break;
            case "/birthdaycollections":
                if(value !== 1)
                {
                    setValue(1);
                    setSelectedDrawerIndex(1);
                }
                break;
            case "/anniversarycollections":
                if(value !== 2)
                {
                    setValue(2);
                    setSelectedDrawerIndex(2);
                }
                break;
            case "/newarrivals":
                if(value !== 3)
                {
                    setValue(3);
                    setSelectedDrawerIndex(3);
                }
                break;
            case "/luxurycollections":
                if(value !== 4)
                {
                    setValue(4);
                    setSelectedDrawerIndex(4);
                }
                break;
            case "/cart":
                if(value !== 5)
                {
                    setValue(5);
                    setSelectedDrawerIndex(5);
                }
                break;
            default:
                break;
        }
    },[value]);

    const tabs=(
        <React.Fragment>
            <Tabs 
                    className={classes.tabContainer}
                    value={value} 
                    onChange={handleChange}>
                        <Tab component={Link} to="/" label="HOME" className={classes.tab}></Tab>
                        <Tab component={Link} to="/birthdaycollections" label="BIRTHDAY FLOWERS"  className={classes.tab}></Tab>
                        <Tab component={Link} to="/anniversarycollections" label="ANNIVERSARY FLOWERS"  className={classes.tab}></Tab>
                        <Tab component={Link} to="/newarrivals" label="NEW ARRIVALS"  className={classes.tab}></Tab>
                        <Tab component={Link} to="/luxurycollections" label="OUR COLLECTION"  className={classes.tab}></Tab>
  
                    </Tabs>
        </React.Fragment>
    )

    const drawer=(
        <React.Fragment>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>

            <Grid container spacing={3} justify="flex-end" style={{position:"absolute",right:"2em",top:"1em"}}>
                    

                        
                         
                
                    <Grid item>
                        <Button variant="contained" className={classes.button}>
                            SIGN IN
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.button}>
                            CART
                        </Button>
                    </Grid>
                </Grid>
             <SwipeableDrawer
             classes={{paper:classes.drawer}}
             disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}
             >
                 <List
                 disablePadding
                 >
                     {drawerRoutes.map((option,index)=>
                     <ListItem   divider button component={Link} to={option.link} onClick={(event)=>{setOpenDrawer(false);handleDrawerItemClick(event, index)}} selected={index === selectedDrawerIndex}>
                     <ListItemText  disableTypography  classes={{root:classes.drawerItem,selected:classes.drawerActiveItem}}>
                         {option.name}
                     </ListItemText>
                 </ListItem>
                     )
                     
                     }
                 </List>

             </SwipeableDrawer>

             
        </React.Fragment>
    )

    const deskBrand=(
        <React.Fragment>
            
                    
                   
            <Typography className={classes.brand}> 
 THE AMOUR ROSE
</Typography>
                 <Grid container spacing={3} justify="flex-end" style={{position:"absolute",right:"2em",top:"1em"}}>
                    

                        
                         
                
                     <Grid item>
                         <Button variant="contained" className={classes.button}>
                             SIGN IN
                         </Button>
                     </Grid>
                     <Grid item>
                         <Button variant="contained" className={classes.button} component={Link} to="/cart">
                             CART
                         </Button>
                     </Grid>
                 </Grid>
            
        </React.Fragment>
    )
    const mobBrand=(
        <React.Fragment>
            <Typography className={classes.brand}>
                    THE AMOUR ROSE
                    </Typography>
        </React.Fragment>
    )
    return(
        <React.Fragment>
            <AppBar color={ theme.palette.common.white}>
            {matches?null:deskBrand}
            
                <Toolbar disableGutters>
                
                    {matches?drawer:tabs}
                    <div className={classes.brandAlign}>
                    {matches?mobBrand:null}
                    </div>
                    
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
}
