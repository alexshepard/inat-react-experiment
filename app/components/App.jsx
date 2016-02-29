import React from 'react';

import Observations from './Observations.jsx';

import ObservationActions from '../actions/ObservationActions';
import ObservationStore from '../stores/ObservationStore';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = ObservationStore.getState();
  }

  componentDidMount() {
    ObservationStore.listen(this.storeChanged);
    ObservationActions.get();
  }

  componentWillUnmount() {
    ObservationStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  };

  addObservation() {
    ObservationActions.create({ species_guess: 'Who Knows?' });
  }

  handleChange = (event) => {
    ObservationActions.get(event.target.value);
  };

  render() {
    const observations = this.state.observations;

    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <Observations observations={observations} />
      </div>
    );
  }
}

export default App;
