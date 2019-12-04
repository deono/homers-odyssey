import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { email: "" };
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>{this.state.email}</h2>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          onChange={this.updateEmailField.bind(this)}
        />
      </div>
    );
  }
}

export default SignUp;
