import React,{useState,useEffect} from 'react'
import { Toolbar,AppBar,Tabs,Tab,Menu,MenuItem,useMediaQuery,useTheme,Typography,
SwipeableDrawer,IconButton,List,ListItem,ListItemText,Grid, Button} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Header from '../ui/Header'

import sm1 from '../assets/images/sm1.jpg'
import sm2 from '../assets/images/sm2.jpg'
import sm3 from '../assets/images/sm3.jpg'
import sm4 from '../assets/images/sm4.jpg'

import Footer from '../ui/Footer';

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
        maxHeight: "20rem",
        height:"auto",
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
            backgroundColor:theme.palette.secondary.main,
            color:"white"
        }

    }
}))

export default function ProductPage(props){
    const classes=useStyles();
    const theme=useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        
        <React.Fragment>
            <Typography variant="h4" className={classes.title} align="center">
                {props.title}
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle}>
            A selection of our most beloved products they're sure to love.
            </Typography>

            <Grid container direction="row"  justify={"space-around"} style={{marginTop:"2em",padding:"2em"}}>
                    <Grid item lg={6} md={6} sm={12} style={{textAlign:"center"}}>
                        <img className={classes.smallImage} src={props.source} ></img>
                        
                        <Typography variant="h6" className={classes.subtitle} align="center">
                        {props.name}
                <h5 style={{letterSpacing:"2px"}}>₹ {props.price}</h5>
                </Typography>
                        
                    </Grid>

                    <Grid item container lg={6} md={6} sm={12} justify="center">

                        
                        <Typography variant="h6" className={classes.subtitle} align={matchesSm?"center":"left"}>
                       
                
                A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.
                <Grid>
                <Button variant="contained" className={classes.button} onClick={()=>{props.handleCartClick(props.name,props.price,props.source);
                }}>
                            Add Cart
                        </Button>

                        <Button variant="contained" className={classes.button} style={{marginLeft:"10px"}} 
                >
                            Buy Now
                        </Button>
                        </Grid>
                        </Typography>
                        
                       
                </Grid>
                    
                

                </Grid>
        </React.Fragment>
        
    )
}