import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import FooterImage from '../assets/images/footer.jpg'
export default function Footer(){
    return(
        <React.Fragment>
<footer style={{backgroundColor:"#F9F9F9"}} style={{marginTop:"1em"}}>

     
            <Grid container direction="row" justify="center" >
                <Grid container item justify="center" style={{margin:"1em"}} spacing={3}>
                    <Grid item style={{opacity:"0.6"}}> 
                    Facebook
                    </Grid>

                    <Grid item style={{opacity:"0.6"}}> 
                    Instagram
                    </Grid>

                    <Grid item style={{opacity:"0.6"}}> 
                    Twitter
                    </Grid>
                </Grid>
                <Grid container item direction="column" xs alignContent="center" style={{textAlign:"center"}} spacing={2}>
                    <Grid item>
                    Our Story 
                    </Grid>

                    <Grid item>
                    FAQs  
                    </Grid>

                    <Grid item>
                    Product Care 
                    </Grid>

                    <Grid item>
                    Shipping 
                    </Grid>
</Grid>
                    <Grid container item direction="column" xs alignContent="center" style={{textAlign:"center"}} spacing={2}>
                    <Grid item>
                    Privacy Policy 
                    </Grid>

                    <Grid item>
                    Accessibility 
                    </Grid>

                    <Grid item>
                    Press 
                    </Grid>

                    <Grid item>
                    Blog 
                    </Grid>
                </Grid>

                <Grid container item direction="column" xs alignContent="center" style={{textAlign:"center"}} spacing={2}>
                    <Grid item>
                    Special Events 
                    </Grid>

                    <Grid item>
                    Careers 
                    </Grid>

                    <Grid item>
                    Contact Us
                    </Grid>

                    <Grid item>
                    COVID-19 
                    </Grid>
                </Grid>
            
            </Grid>

            <div style={{textAlign:"center",margin:"2em"}}>
                <img src={FooterImage} style={{height:"7em",borderRadius:"50%",marginLeft:"auto",marginRight:"auto"}}></img>
            </div>

            <Typography variant="subtitle2" style={{opacity:"0.6",textAlign:"center",margin:"1em"}} >
            © 2020 The Amour Roses ® | All rights reserved 
            </Typography>
            </footer>
        </React.Fragment>
    )
}