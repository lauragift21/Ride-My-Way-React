import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Footer from "../components/Footer";
// assets
import car from "../assets/img/car.png";

// actions
import signIn from "../actions/SignIn";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value.trim() });
  };

  handleSubmit(event) {
    const { handleSignIn } = this.props;
    const { email, password } = this.state;
    handleSignIn(email, password);
    event.preventDefault();
  }

  // handleError() {
  //   const { error } = this.props;
  //   if (!error) return;
  //   clearFormError();
  // }

  render() {
    const { email, password } = this.state;
    const { isAuthenticated } = this.props;
    console.log(this.props);
    const submitBtn = (
      <button type="submit" className="btn" id="submit">
        Signin
      </button>
    );
    return (
      <>
        <header className="head">
          <div className="container">
            <div className="brand-center">
              <h2>
                <Link to="/">
                  <img src={car} alt="brand" height="60px" />
                </Link>
              </h2>
            </div>
          </div>
        </header>
        <section className="signup">
          <div className="container">
            <div className="tabarea">
              <div id="signin">
                <div className="form-header">Sign in to your account</div>
                <div className="form">
                  <form
                    id="form"
                    onKeyDown={this.handleError}
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <div className="error" id="serverError" />
                      <input
                        type="email"
                        className="text-email"
                        id="email"
                        value={email}
                        placeholder="Email*"
                        onChange={this.handleInputChange}
                      />
                      <p className="error" id="emailError" />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="text-email"
                        id="password"
                        value={password}
                        onChange={this.handleInputChange}
                        placeholder="Password*"
                      />
                      <p className="error" id="passwordError" />
                    </div>
                    <div className="form-group button">
                      {submitBtn}
                      <br />
                      <br />
                      <b className="btn-text">
                        Not a member?
                        <Link to="/register">Register now</Link>
                      </b>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

SignIn.propTypes = {
  handleSignIn: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = dispatch => ({
  handleSignIn(email, password) {
    dispatch(signIn(email, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
