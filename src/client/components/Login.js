import React, { Component } from "react";

import "./Login.scss";

class Login extends Component {
  handleInputChange = (e) => {
    this.props.createUser(e.target.value);
  };

  render() {
    return (
      <div className='login'>
        <div className='login__title'>
          Enter your user email, If you don't have one we will create one for
          you:
        </div>
        <input
          className='login__input'
          type='text'
          placeholder='Type your email here'
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Login;
