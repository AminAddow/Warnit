import React from 'react';
import Bannerpic from './images/banner2.jpg';
import Grid from '@material-ui/core/Grid';


const bannerStyle ={
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Bannerpic})`,
    border: '3px solid black'
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