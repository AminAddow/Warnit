import React, {Component} from "react";
import { Link } from 'react-router-dom';

import "./../stylesheet/404.css";

function NoMatch({ location }) {
    return(
        <div>
            <p class="zoom-area">Har du gått deg bort?</p>
            <p class="zoom-area">Siden <b>{location.pathname}</b> finnes ikke</p>
            <section class="error-container">
              <span>4</span>
              <span><span class="screen-reader-text">0</span></span>
              <span>4</span>
            </section>
            <p class="zoom-area"><Link  to="/">Jeg vil hjem igjen</Link></p>

        </div>
    )
}

export default NoMatch;
