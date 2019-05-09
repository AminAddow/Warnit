import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './../stylesheet/home.css';

import InfoCard from './views/InfoCard';
import Banner from './views/Banner';
import Buttons from './views/Buttons';
//import { Button } from "@material-ui/core";



class Home extends Component {
    render(){
    return(
        <div>
            <Grid container justify="center" alignItems="center" style={{border: '3px solid blue'}}>
                <Grid item xs={12} style={{border: '3px solid red'}}>
                   
                    <Banner ><Buttons/></Banner>
                    <InfoCard/>
                </Grid>
            </Grid>
        </div>
        )
    };
}

export default Home;
