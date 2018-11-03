import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
// components
import Modal from "./Modal";
// actions
import { getSingleRide } from "../actions/rides";

class ViewRides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { ride } = this.props;
    return (
      <>
        <tr className="row">
          <td>{ride.location}</td>
          <td> {ride.destination} </td>
          <td> {moment(ride.departure).format("MMM DD, YYYY")} </td>
          <td> {ride.seats} </td>
          <td>
            <button className="button" onClick={this.toggleModal}>
              View
            </button>
            {/* modal */}
            <Modal
              ride={ride}
              show={this.state.isOpen}
              onClose={this.toggleModal}
            />
          </td>
        </tr>
      </>
    );
  }
}

ViewRides.propTypes = {
  ride: PropTypes.object,
  dispatchRide: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  dispatchRide(rideId) {
    return dispatch(getSingleRide(rideId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ViewRides);
