import React,{useState,useEffect} from 'react'
import { Toolbar,AppBar,Tabs,Tab,Menu,MenuItem,useMediaQuery,useTheme,Typography,
SwipeableDrawer,IconButton,List,ListItem,ListItemText,Grid, Button,Card} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Header from '../ui/Header'

import sm1 from '../assets/images/sm1.jpg'
import sm2 from '../assets/images/sm2.jpg'
import sm3 from '../assets/images/sm3.jpg'
import sm4 from '../assets/images/sm4.jpg'

import Footer from '../ui/Footer';

import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles=makeStyles(theme=>({
    title:{
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px",
        fontWeight:500,
        marginTop:"1em"
    },
    subtitle:{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:200,
        marginTop:"0.5em",
        marginBottom:"0.5em",
        lineHeight:"2em",
        verticalAlign:"top"
    },
    smallImage:{
        maxHeight:"10rem",
        height: "auto",
        
        
    },
    button:{
        paddingLeft:"3em",
        paddingRight:"3em",
        fontSize:"14px",
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
}))


export default function ProductPage(props){
    const classes=useStyles();
    const theme=useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const cartData = props.cartData;


    return(
        
        <React.Fragment>
            <Typography variant="h4" className={classes.title} align="center">
                YOUR CART
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle}>
            Enjoy Our Products.
            </Typography>

            <hr
        style={{
           
            color:"#4D4D4D",
            

            
        }}
    />
            <Grid  container direction="column" spacing={3} style={{textAlign:"center"}}>
    {cartData.map(item=>
        <React.Fragment>
            <Grid item container  style={{marginTop:"2em"}} justify="space-around">
                <Grid item xs style={{textAlign:"center",}}>
                    <img src={item.source} className={classes.smallImage} ></img>
                </Grid>
                <Grid item xs>
                <Button variant="contained" className={classes.button}  onClick={()=>{props.handleDeleteCart(item.name,item.price,item.source)}}
                >
                            Drop It
                        </Button>

                    <Typography variant="h6" className={classes.subtitle} >
                        {item.name}
                <h5 style={{letterSpacing:"2px"}}>₹ {item.price}</h5>

                <Button variant="contained" className={classes.button}  
                >
                            Buy Now
                        </Button>

                        </Typography>
                        <div>

                        </div>
                    
                    </Grid>

                    
                </Grid>
                <Grid lg>
                <hr
        style={{
            
            color:"#4D4D4D",
            

            
        }}
    />
                    </Grid>
                
                </React.Fragment>
            
        
        
        )}
        </Grid>

        </React.Fragment>
        
    )
}