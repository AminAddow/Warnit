import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render( 
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
document.getElementById("root"));

serviceWorker.register();
