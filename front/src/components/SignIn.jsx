import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import SimpleSnackbar from "./SimpleSnackbar";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const [user, setUser] = useState({ user: { email: "", password: "" } });
  // const history = useHistory();

  // set the input values from the form in the component state
  handleInputChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  }

  // submit the form values (from state) to the API
  handleSubmit(event) {
    event.preventDefault();

    console.log("Sign In from submitted: ", this.state.user);
    // POST the state to the /auth/signup API
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state.user)
    })
      .then(res => res.json())
      .then(
        res => this.props.setFlash(res.flash),
        err => this.props.setFlash(err.flash)
      )
      .then(this.props.showSnackBar)
      .then(this.props.history.push("/profile"));
  }

  render() {
    console.log("signin props: ", this.props);
    return (
      <div>
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email: </InputLabel>
            <Input
              type="email"
              name="email"
              id="email"
              value={this.state.user.email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password">Password: </InputLabel>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.user.password}
              onChange={this.handleInputChange}
              placeholder="Password"
            />
          </FormControl>

          <Button
            style={{ marginTop: "20px", float: "left" }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Submit
          </Button>
          <Link to="/Signup">
            <Button
              style={{ marginTop: "20px", float: "right" }}
              variant="contained"
            >
              Go To Sign Up
            </Button>
          </Link>
        </form>

        <SimpleSnackbar
          open={this.props.open}
          message={this.props.flash}
          onClose={this.props.closeSnackBar}
        />
      </div>
    );
  }
}

export default withRouter(SignIn);
