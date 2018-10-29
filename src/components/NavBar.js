import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSignUp: false
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenSignUpModal = () => {
    this.setState({ openSignUp: true });
  };

  onCloseSignUpModal = () => {
    this.setState({ openSignUp: false });
  };

  render() {
    const { open, openSignUp } = this.state;
    return (
      <header className="top-nav">
        <div className="container">
          <div id="brand">
            <a href="/">
              <div className="brand" />
            </a>
          </div>
          <nav>
            <Link to="/" className="menu-icon" />
            <ul>
              <li>
                <button type="button" onClick={this.onOpenModal}>
                  Sign In
                </button>
                <Modal open={open} onClose={this.onCloseModal} center>
                  <SignIn />
                </Modal>
              </li>
              <li>
                <button type="button" onClick={this.onOpenSignUpModal}>
                  Get Started
                </button>
                <Modal
                  open={openSignUp}
                  onClose={this.onCloseSignUpModal}
                  center
                >
                  <SignUp />
                </Modal>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default NavBar;
