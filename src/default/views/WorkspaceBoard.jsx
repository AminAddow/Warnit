import React, { Component } from 'react';
import firebase from "./../../firebase";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class WorkspaceBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayname: "Ola Nordmann"
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
                            Velkommen, <b><i>{this.state.displayname}</i></b>
                        </Typography>
                        <Typography variant="subheading">
                            Velkommen til ditt workspace. Her har du mulighet til å opprette nye saker, se tidligere saker og se meldinger som berører ditt område.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default WorkspaceBoard;
