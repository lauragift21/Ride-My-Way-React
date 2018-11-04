import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { requestRides } from "../actions/rides";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    const { ride } = this.props;
    return (
      <div id="myModal" className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={this.props.onClose} id="close">
            ×
          </span>
          <div className="modal-title">
            <h1 className="text-center" style={{ color: "#333" }}>
              Ride Information
            </h1>
          </div>
          <div className="modal-table" id="details">
            <table className="ride-table">
              <tbody>
                <tr>
                  <td>Location:</td>
                  <td>{ride.location}</td>
                </tr>
                <tr>
                  <td>Destination: </td>
                  <td>{ride.destination}</td>
                </tr>
                <tr>
                  <td> Departure: </td>
                  <td>{moment(ride.departure).format("MMM DD, YYYY")}</td>
                </tr>
                <tr>
                  <td> Seats: </td>
                  <td>{ride.seats}</td>
                </tr>
              </tbody>
            </table>
            <button className="trip-btn modal-btn">Request Ride</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  ride: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  dispatchRequest(rideId) {
    return dispatch(requestRides(rideId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Modal);
