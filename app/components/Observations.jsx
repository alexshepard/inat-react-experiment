import React from 'react';
import Observation from './Observation.jsx';

class Observations extends React.Component {
  render() {
    const observations = this.props.observations ? this.props.observations : [];

    return (
      <div className="observations">{observations.map(observation =>
        <Observation
          species_guess={observation.species_guess}
          photos={observation.photos}
        />
      )}</div>
    );
  }
}

Observations.propTypes = {
  observations: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Observations;
