import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

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
      </div>
    );
  }
}

export default Profile;
