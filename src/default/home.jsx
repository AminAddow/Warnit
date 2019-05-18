import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./../stylesheet/home.css";

import InfoCard from "./views/InfoCard";
import Banner from "./views/Banner";
import Buttons from "./views/Buttons";
import TextCard from "./views/TextCard";
//import { Button } from "@material-ui/core";

class Home extends Component {
  state = {
    modalOpen: false
  };

  // handle modal event
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Banner>
              <Buttons
                handleModalOpen={this.handleModalOpen}
                stateModalOpen={modalOpen}
                handleModalClose={this.handleModalClose}
              />
            </Banner>
            <TextCard />
            <InfoCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
