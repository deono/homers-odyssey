import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        surname: "Simpson"
      }
    };
  }
  render() {
    return (
      <div>
        <h4>Profile</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Name"
              secondary={`${this.state.profile.name} ${this.state.profile.surname}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={this.state.profile.email}
            />
          </ListItem>
        </List>
        <Link to="/signin">
          <Button
            style={{ marginTop: "20px", float: "right" }}
            variant="contained"
            color="secondary"
          >
            Sign Out
          </Button>
        </Link>
      </div>
    );
  }
}

export default Profile;
