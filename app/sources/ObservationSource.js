

const ObservationSource = {
  get(text) {
    return new Promise((resolve, reject) => {
      // Do the usual XHR stuff
      const req = new XMLHttpRequest();
      const url = `http://api.inaturalist.org/v1/observations?per_page=50&photos=true&q=${text}&search_on=names`;
      req.open('GET', url);

      req.onload = () => {
        // This is called even on 404 etc
        // so check the status
        if (req.status === 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = () => {
        reject(Error('Network Error'));
      };

      // Make the request
      req.send();
    });
  },

  fetch() {
    const mockData = [
      { id: 0, species_guess: 'Abu Dhabi' },
      { id: 1, species_guess: 'Berlin' },
      { id: 2, species_guess: 'Bogota' },
      { id: 3, species_guess: 'Buenos Aires' },
      { id: 4, species_guess: 'Cairo' },
      { id: 5, species_guess: 'Chicago' },
      { id: 6, species_guess: 'Lima' },
      { id: 7, species_guess: 'London' },
      { id: 8, species_guess: 'Miami' },
      { id: 9, species_guess: 'Moscow' },
      { id: 10, species_guess: 'Mumbai' },
      { id: 11, species_guess: 'Paris' },
      { id: 12, species_guess: 'San Francisco' },
    ];

    return new Promise((resolve) => {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  },
};

export default ObservationSource;
