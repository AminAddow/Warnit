import React from 'react';
import Bannerpic from './images/banner2.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";




const bannerStyle ={
    width: "100%",
    height: "75vh",
    backgroundImage: `url(${Bannerpic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   
    //filter: 'blur(1px)',

    
}

const Banner = (props) => {
    return (

        <Grid container item style={bannerStyle} justify="center" alignItems="center">
            <Grid item xs={12} justify="center" align="center" style={{ marginTop: '40px'}}> 
                <Typography xs={12} color="inherit" variant="h2"  >
                    Ikke vær redd, si ifra
                </Typography>

                
            </Grid> 
            <Grid item justify="center" align="center" >
                {props.children}
            </Grid>
            <Grid item xs={12} justify="center" align="center" style={{ marginTop: '-250px'}}> 
                <Typography variant="body2" color="secondary" >
                    eller les mer under
                </Typography>   
            </Grid> 
            
        </Grid>
        
            

    );

}

export default Banner;