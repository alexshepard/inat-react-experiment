import uuid from 'node-uuid';
import alt from '../libs/alt';

import ObservationActions from '../actions/ObservationActions';
import ObservationSource from '../sources/ObservationSource';

class ObservationStore {
  constructor() {
    this.bindActions(ObservationActions);

    this.observations = [];

    this.errorMessage = null;
  }

  create(observation) {
    const observations = this.observations;

    const newObservation = observation;
    newObservation.id = uuid.v4();

    this.setState({
      observations: observations.concat(newObservation),
    });
  }

  update(updatedObservation) {
    const observations = this.observations.map(observation => {
      if (observation.id === updatedObservation.id) {
        return Object.assign({}, observation, updatedObservation);
      }

      return observation;
    });

    this.setState({ observations });
  }

  get(text) {
    ObservationSource.get(text)
    .then((observationString) => {
      const resp = JSON.parse(observationString);
      const results = resp.results;
      console.log("results length is ", results.length);
      this.observations = results;
      this.setState({ observations: results });
    })
    .catch((errorMessage) => {
      console.log('fetch failed', errorMessage);
    });
  }

  fetch() {
    ObservationSource.fetch()
    .then((observations) => {
      this.observations = observations;
      this.setState({ observations });
    })
    .catch((errorMessage) => {
      console.log('fetch failed', errorMessage);
    });
  }


  delete(id) {
    this.setState({
      observations: this.observations.filter(observation => observation.id !== id),
    });
  }
}

export default alt.createStore(ObservationStore, 'ObservationStore');
