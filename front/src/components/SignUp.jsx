import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    console.log("From submitted: ", this.state);
  }

  render() {
    return (
      <div>
        <h4>{JSON.stringify(this.state)}</h4>
        <form onSubmit={this.submitForm}>
          <input
            className="form-control m-1"
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <input
            className="form-control m-1"
            type="text"
            name="surname"
            id="surname"
            value={this.state.surname}
            onChange={this.handleInputChange}
            placeholder="Surname"
          />
          <input
            className="form-control m-1"
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            className="form-control m-1"
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <input
            className="form-control m-1"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            value={this.state.repeatPassword}
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
