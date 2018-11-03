import React, { Fragment, Component } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CallOut from "../components/CallOut";
import NavBar from "../components/NavBar";

class Home extends Component {
  render() {
    // const { auth } = this.props;
    // const Nav = auth.isAuthenticated ? <Menu /> : <AuthMenu />;
    return (
      <Fragment>
        <NavBar />
        <Hero />
        <CallOut />
        <Footer />
      </Fragment>
    );
  }
}

// const mapDispatchToProps = state => ({
//   auth: state.auth
// });

export default Home;
