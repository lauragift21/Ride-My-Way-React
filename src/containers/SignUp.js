import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="signup">
        <div className="container">
          <div className="tabarea">
            {/* tab links */}
            <div className="tab">
              <a href="./signup.html">
                <div className="tablinks">
                  SIGN UP
                </div>
              </a>
              <a href="./signin.html">
                <div className="tablinks">
                  SIGN IN
                </div>
              </a>
            </div>
            <hr className="tab" />
            {/* tab content */}
            <div id="signin">
              <div className="form-header">
                Create your account to join Ride My Way
              </div>
              <div className="form">
                <div id="errMessage" />
                <form id="form" action="#">
                  <div className="form-group">
                    <input type="text" className="text-email" name="first" id="first" placeholder="First Name*" />
                    <p className="error" id="firstError" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="text-email" name="last" id="last" placeholder="Last Name*" />
                    <p className="error" id="lastError" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="text-email" name="email" id="email" placeholder="Email*" />
                    <p className="error" id="emailError" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="text-email" name="location" id="location" placeholder="location*" />
                    <p className="error" id="locationError" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="text-email" name="password" id="password" placeholder="Password*" />
                    <p className="error" id="passwordError" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="text-email" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password*" />
                    <p className="error" id="passwordConfirmError" />
                  </div>
                  <div className="form-group button">
                    <button type="submit" className="btn" id="submit">SIGN UP</button>
                    <b className="btn-text">
                      Already a member?
                      <a href="./signin.html">Sign in instead</a>
                    </b>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
