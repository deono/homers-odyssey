import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "jane",
        surname: "doe",
        email: "jane@gmail.com",
        password: "12345",
        repeatPassword: "12345"
      },
      flash: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit(event) {
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
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  }

  render() {
    return (
      <div>
        <h4>{this.state.flash}</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control m-1"
            type="text"
            name="name"
            id="name"
            value={this.state.user.name}
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <input
            className="form-control m-1"
            type="text"
            name="surname"
            id="surname"
            value={this.state.user.surname}
            onChange={this.handleInputChange}
            placeholder="Surname"
          />
          <input
            className="form-control m-1"
            type="email"
            name="email"
            id="email"
            value={this.state.user.email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            className="form-control m-1"
            type="password"
            name="password"
            id="password"
            value={this.state.user.password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <input
            className="form-control m-1"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            value={this.state.user.repeatPassword}
            onChange={this.handleInputChange}
            placeholder="Repeat password"
          />
          <input className="btn btn-primary m-1" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
