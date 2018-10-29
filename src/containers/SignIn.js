import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="signup">
        <div className="container">
          <div id="signin">
            <div className="form-header">Sign in to your account</div>
            <div className="form">
              <form id="form" action>
                <div className="form-group">
                  <div className="error" id="serverError" />
                  <input
                    type="email"
                    className="text-email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                  />
                  <p className="error" id="emailError" />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="text-email"
                    id="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <p className="error" id="passwordError" />
                </div>
                <div className="form-group button">
                  <button type="submit" className="btn" id="submit">
                    SIGN IN
                  </button>
                  <b className="btn-text">
                    Not a member?
                    <a href="./signup.html">Register now</a>
                  </b>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignIn;
