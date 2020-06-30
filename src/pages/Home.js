import React,{useState,useEffect} from 'react'
import { Toolbar,AppBar,Tabs,Tab,Menu,MenuItem,useMediaQuery,useTheme,Typography,
SwipeableDrawer,IconButton,List,ListItem,ListItemText,Grid, Button} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Header from '../ui/Header'
import Carousel from '../components/Carousel'

import sm1 from '../assets/images/sm1.jpg'
import sm2 from '../assets/images/sm2.jpg'
import sm3 from '../assets/images/sm3.jpg'
import sm4 from '../assets/images/sm4.jpg'

import video1 from '../assets/videos/intro.mp4'
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
    },
    smallImage:{
        maxHeight: "18.75rem",
        height:"auto",
    },
    video:{
       height:"80vh"
    }
}));
export default function Home()
{
    const classes=useStyles();
    return(
        <React.Fragment>
            <Carousel></Carousel>
            <Typography variant="h4" className={classes.title} align="center">
                OUR PICKS
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle}>
            A selection of our most beloved products they're sure to love.
            </Typography>
            <Grid container direction="row" spacing={2} justify="center">


                <Grid container item direction="column" sm xs={12} alignContent="center" justify="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm2}></img>
                    </Grid>
                    <Grid item justify="center">
                        <Typography variant="h6" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>
                </Grid>

              

                <Grid container item direction="column" xs={12} sm  alignContent="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm4}></img>
                    </Grid>

                    <Grid item justify="center">
                        <Typography variant="h5" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid container spacing={3} style={{padding:"1em"}}>
                <Grid item xs>
                <Typography variant="h3" className={classes.title} align="left" style={{display:"inline",verticalAlign:"top"}}>
                HOME OF ETERNITY® ROSES
            </Typography>
            <Typography variant="subtitle1" align="left" className={classes.subtitle}>
            Curated by floral design specialists at our bespoke atelier in New York, each arrangement is chic and sourced from our lush, vibrant rose fields of Ecuador. Our signature collection of arrangements features metallic, suede, leather, marble, gemstone, glass and heart-shaped creations and designs
            </Typography>
                
                </Grid>

                <Grid item>
                <video autoplay={true} muted={true} className={classes.video}>
                    <source src={video1} type="video/mp4"></source>
                </video> 
                </Grid>
            </Grid>

            <Typography variant="h4" className={classes.title} align="center">
                FEATURED COLLECTIONS
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle}>
            A selection of our most beloved products they're sure to love.
            </Typography>
            <Grid container direction="row" spacing={2} justify="center">


                <Grid container item direction="column" xs alignContent="center" justify="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm1}></img>
                    </Grid>
                    <Grid item justify="center">
                        <Typography variant="h6" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>
                </Grid>

              

                <Grid container item direction="column" xs alignContent="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm3}></img>
                    </Grid>

                    <Grid item justify="center">
                        <Typography variant="h5" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container item direction="column" xs alignContent="center" justify="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm1}></img>
                    </Grid>
                    <Grid item justify="center">
                        <Typography variant="h6" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>
                </Grid>

              

                <Grid container item direction="column" xs alignContent="center">
                    <Grid item>
                        <img className={classes.smallImage} src={sm3}></img>
                    </Grid>

                    <Grid item justify="center">
                        <Typography variant="h5" className={classes.subtitle} align="center">
                        Lé Petit Black Classic 
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

        </React.Fragment>
    )
}