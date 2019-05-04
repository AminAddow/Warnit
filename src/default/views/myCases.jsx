import React, { Component } from 'react';
import firebase from "./../../../firebase";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class MyCases extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // componentDidMount(){
    //
    // }

    render(){
        return(
            <div>
                <Card style={{height: 250}}>
                    <CardContent>
                        <Typography gutterBottom variant="title">
                            Mine saker
                        </Typography>
                        <Typography variant="subheading">
                            Du har ingen saker
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default MyCases;
