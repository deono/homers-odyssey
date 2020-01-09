import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import SimpleSnackbar from "./SimpleSnackbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flash: "",
      open: false
    };
    this.setFlash = this.setFlash.bind(this);
    this.showSnackBar = this.showSnackBar.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  // set the message to be displayed
  setFlash(flash) {
    this.setState({ flash });
  }

  // open the snackbar component to show a flash message
  showSnackBar() {
    this.setState({ open: true });
  }

  // close the snackbar component that shows flash message
  closeSnackBar(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <SimpleSnackbar
            open={this.state.open}
            message={this.state.flash}
            onClose={this.closeSnackBar}
          />
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                  <img
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                    alt="homer"
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "20px" }}>
                  <Router>
                    <Switch>
                      <Route path="/signup">
                        <SignUp
                          setFlash={this.setFlash}
                          showSnackBar={this.showSnackBar}
                        />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path="/">
                        <SignIn
                          setFlash={this.setFlash}
                          showSnackBar={this.showSnackBar}
                        />
                      </Route>
                      <Route path="/signin"></Route>
                    </Switch>
                  </Router>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
