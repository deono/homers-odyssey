import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
// import SimpleSnackbar from "./SimpleSnackbar";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const [user, setUser] = useState({
  //   user: {
  //     name: "",
  //     surname: "",
  //     email: "",
  //     password: "",
  //     repeatPassword: ""
  //   }
  // });
  // const history = useHistory();

  handleInputChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("From submitted: ", this.state.user);
    // POST the state to the /auth/signup API
    fetch("/auth/signup", {
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
      .then(this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h4>Sign Up</h4>
        <form onSubmit={this.handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name">Name: </InputLabel>
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.user.name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="surname">Surname: </InputLabel>
            <Input
              type="text"
              name="surname"
              id="surname"
              value={this.state.user.surname}
              onChange={this.handleInputChange}
              placeholder="Surname"
            />
          </FormControl>

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

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="repeatPassword">Repeat Password: </InputLabel>
            <Input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              value={this.state.user.repeatPassword}
              onChange={this.handleInputChange}
              placeholder="Repeat password"
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
          <Link to="/Signin">
            <Button
              style={{ marginTop: "20px", float: "right" }}
              variant="contained"
            >
              Go To Sign In
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
