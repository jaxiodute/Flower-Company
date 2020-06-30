import React,{useState,useEffect} from 'react'
import { Toolbar,AppBar,Tabs,Tab,Menu,MenuItem,useMediaQuery,useTheme,Typography,
SwipeableDrawer,IconButton,List,ListItem,ListItemText,Grid, Button} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Header from '../ui/Header'

import fresh from '../assets/images/fresh.jpeg'
import luxury from '../assets/images/luxury.jpeg'
import preserved from '../assets/images/preserved.jpeg'
import sm4 from '../assets/images/sm4.jpg'

import Footer from '../ui/Footer';
import bimg from '../assets/images/birthday/img1.jpg'
import * as data from '../data'
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
    },
    smallImage:{
        maxHeight: "18.75rem",
        height:"auto",
    },
}))

export default function ShopAll(){
    const classes=useStyles();
    return(
        <React.Fragment>
        <Typography variant="h4" className={classes.title} align="center">
                BIRTHDAY COLLECTIONS
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle}>
            A selection of our most beloved products they're sure to love.
            </Typography>

            <Grid container direction="row" spacing={2} justify="center">

                {data.birthday.map(item=>
                    <Grid container item direction="column" xs alignContent="center" justify="center" style={{margin:"2em"}}>
                    <Grid item component={Link} to={{
                        pathname:'/birthdaycollections/' + item.name,
                        title:"BIRTHDAY COLLECTION",
                        name:item.name,
                        source:item.source,
                        price:item.price,
                        }} >
                        <img className={classes.smallImage} src={item.source}></img>
                    </Grid>
                    <Grid item justify="center">
                        <Typography variant="h6" className={classes.subtitle} align="center">
                        {item.name}
                <h5 style={{letterSpacing:"2px"}}>₹ {item.price}</h5>
                        </Typography>
                    </Grid>
                </Grid>
                    )}
                

                </Grid>
                </React.Fragment>
    )
}