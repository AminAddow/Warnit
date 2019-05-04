import React, { Component } from 'react';
// import "./../../stylesheet/App.css";
import firebase from "./../../../firebase";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


import { Redirect } from 'react-router-dom';



class Loginui extends Component {
    constructor(props) {
      super(props);
      this.state = {email: '',
                    pass:'',
                    redirect: false,
                    authenticated: false
                };
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
      this.authWithEmailPassword = this.authWithEmailPassword.bind(this);

  };

authWithEmailPassword(event){
    const auth = firebase.auth();

    console.table([{
        email: this.state.email,
        pass: this.state.pass
    }]);

    let email = this.state.email;
    let pass = this.state.pass;

    auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;

          console.log("Code: ", errorCode);
          console.log("Message: ", errorMessage);
      })

      auth.onAuthStateChanged(user => {
          if (user) {
              this.setState({
                  redirect: true,
              })
            // User is signed in.
            console.log("Bruker er logget på.");
            // User is signed in.
            var email = user.email
            var uid = user.uid
            console.table([{
                email,
                uid
            }])
            // ...
          } else {
            // User is signed out.
            console.log("Bruker er ikke logget på.");
          }
        });
    event.preventDefault();
};

  handleChange(event){
    console.log("Event.target", event.target);
    const target = event.target;
    const value = target.type === 'pass' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    };

    // handleSubmit(event) {
    //   console.log(this.state.email);
    //   console.log(this.state.pass);
    //   event.preventDefault();
    // };

    render(){
        if (this.state.redirect === true) {
            return <Redirect to='/workspace' />
        }
        return(
            <div>
                <Card className="" style={{ width: '20rem' }}>
                    <CardContent>
                        {/* <Form onSubmit={this.handleSubmit}> */}
                        <form onSubmit={(event) => {
                            this.authWithEmailPassword(event)}
                        } ref={(form) => {this.loginForm = form}}>
                            <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.email}
                            variant="outlined"
                            />
                            {/* <FormControl type="email" name="email" placeholder="Epost" checked={this.state.email} onChange={this.handleChange} /> */}
                            <TextField
                              id="outlined-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              margin="normal"
                              onChange={this.handleChange}
                              checked={this.state.pass}
                              variant="outlined"
                            />
                            {/* <FormControl type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.handleChange} /> */}
                            <Button variant="text" value="log in" type="submit">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    };
}

export default Loginui;
