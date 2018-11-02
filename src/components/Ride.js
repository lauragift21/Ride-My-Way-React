import React from "react";

const Ride = () => (
  // const { loading, dispatchRide } = this.props;
  <>
    <div className="lds-ring" id="spinner">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div id="myModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <span className="close" id="close">
          ×
        </span>
        <div className="modal-title">
          <h1 className="text-center" style={{ color: "#333" }}>
            Ride Information
          </h1>
        </div>
        <div className="modal-table" id="details" />
      </div>
    </div>
  </>
);

export default Ride;
