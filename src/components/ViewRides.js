import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ViewRides = props => {
  const { ride } = props;
  return (
    <tr className="row">
      <td>{ride.location}</td>
      <td> {ride.destination} </td>
      <td> {moment(ride.departure).format("MMM DD, YYYY")} </td>
      <td> {ride.seats} </td>
      <td>
        <button className="ride-success">Request</button>
      </td>
    </tr>
  );
};

ViewRides.propTypes = {
  ride: PropTypes.object
};

export default ViewRides;
