import React from "react";
import propTypes from "prop-types";

function Simulation(props) {
  return (
    <div>
      <button onClick={() => props.setUser("Arya")} className="btn btn-primary">
        Arya
      </button>
      <button
        onClick={() => props.setUser("Aurore")}
        className="btn btn-primary"
      >
        Aurore
      </button>
    </div>
  );
}

Simulation.propTypes = {
  setUser: propTypes.func.isRequired,
};

export default Simulation;
