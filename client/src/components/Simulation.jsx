import React from "react";
import propTypes from 'prop-types';


function Simulation(props) {
  return (
    <div>
      <button onClick={() => props.setUser("Arya")}>Arya</button>
      <button onClick={() => props.setUser("Aurore")}>Aurore</button>
    </div>
  );
}


Simulation.propTypes = {
    setUser: propTypes.func.isRequired
}

export default Simulation;