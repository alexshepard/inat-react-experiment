import React from 'react';

class Observation extends React.Component {

  render() {
    let photoUrl = '';

    // Render the component differently based on state.
    const speciesGuess = this.props.species_guess ? this.props.species_guess : 'Unknown';
    if (this.props.photos) {
      console.log(`count is ${this.props.photos.length}`);
    }

    if (this.props.photos && this.props.photos.length > 0) {
      const firstPhoto = this.props.photos[0];
      const firstPhotoUrl = firstPhoto.url;
      if (firstPhotoUrl) {
        photoUrl = firstPhotoUrl.replace('square', 'small');
      }
    }
    console.log(`photo url is ${photoUrl}`);

    const divStyle = {
      color: 'white',
      backgroundImage: `url(${photoUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    return (

      <div className="observation">
        <div className="thumb" style={divStyle}></div>
        <span className="speciesGuess">{speciesGuess}</span>
      </div>
    );
  }
}

Observation.propTypes = {
  species_guess: React.PropTypes.string,
  photos: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Observation;
