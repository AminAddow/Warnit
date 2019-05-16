import React from 'react';
import Bannerpic from './images/banner3.jpg';
import Grid from '@material-ui/core/Grid';
import zIndex from '@material-ui/core/styles/zIndex';


const bannerStyle ={
    width: "100%",
    height: "80vh",
    backgroundImage: `url(${Bannerpic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '3px solid black',
    
}
const Banner = (props) => {
    return (

        <Grid container item style={bannerStyle} justify="center" alignItems="center">
            <Grid item  style={{border: '3px solid lightblue'}}>
            {props.children}
            </Grid>
        </Grid>
        
            

    );

}

export default Banner;