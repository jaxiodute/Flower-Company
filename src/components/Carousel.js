import React from 'react';

import {Carousel,CarouselItem} from 'react-bootstrap';

import img1 from '../assets/images/rose2.jpeg'
import img2 from '../assets/images/two.jpeg'
import img3 from '../assets/images/three.jpeg'
import Button from '@material-ui/core/Button'
import {useTheme,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    img:{
    [theme.breakpoints.up("xs")]:{
        height:"60vh",
        width:"100%",
objectFit:"cover",
objectPosition:"50% 50%",

    },
    
},
    imgcontainer:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    button:{
        padding:"6px",
        fontSize:"12px",
        borderRadius:0,
        backgroundColor:"white",
        fontFamily: "'Montserrat', sans-serif",
        color:theme.palette.common.black,
        fontWeight:500,
        bottom:"2em",
    }
}))
export default function Carousels()
{
    const classes=useStyles();
    return(
        <Carousel controls={false}>
  <Carousel.Item >
      <div className={classes.imgcontainer}>
    <img
      
      className={classes.img}
      src={img1}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
     <Button className={classes.button}>SHOP ALL</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={classes.img}
      src={img2}
      alt="Third slide"
      
    />

    <Carousel.Caption>
    <Button className={classes.button}>SHOP ALL</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={classes.img}
      src={img3}
      alt="Third slide"
     
    />

    <Carousel.Caption>
    <Button className={classes.button}>SHOP ALL</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}