import React from 'react';
import Bannerpic from './images/banner.jpg';
import Grid from '@material-ui/core/Grid';




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
            <Grid item>
            {props.children}
            </Grid>
        </Grid>
        
            

    );

}

export default Banner;