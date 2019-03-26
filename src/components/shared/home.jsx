import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './../../stylesheet/home.css';


class Home extends Component {
    render(){
    return(
        <div>
            <Grid container justify="center" alignItems="center">
                <Grid item >
                    <h1>Landing zone</h1>
                </Grid>
                <Grid item>
                    <h1>Hvem er minos</h1>
                </Grid>
            </Grid>
        </div>
        )
    };
}

export default Home;
