import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    const signUpButton = document.getElementById('signUp');

    const signInButton = document.getElementById('login');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));


    signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

  }

  render() {

    return (

      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="text">Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="BUTTON">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="text signin-text ">Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a className="forgot" href="#">Forgot your password?</a>
            <button className="BUTTON">Login</button>
            <button className=" BUTTON" id="signIn">sign in with Facebook</button>
            <button className=" BUTTON" id="signIn">sign in with Google</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left ">
              <h1 className="text">Hello friend!</h1>
              <p>Login to your account</p>
              <button className="login_button BUTTON" id="login">Login</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text">Welcome Back!</h1>
              <p>Dont have an account? <br /> Join us now</p>
              <button className="signup_button BUTTON" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;