import React, { Component } from 'react';
import SpeciesSelector from '../../components/SpeciesSelector/SpeciesSelector';
import LocationSelector from '../../components/LocationSelector/LocationSelector';
import fish from '../../assets/images/fish.png';

class Onboard extends Component {

  state = {
    choosingSpecies: false,
    choosingLocation:false,
    started: false,
    finished: false,
    species: [
      'Koho Salmon',
      'Lobster',
      'Tiger Shrimp',
      'Pink Salmon'
    ],
    selectedSpecies: 'Koho Salmnon',
    locations: [
      'British Columbia', 
      'Prince Edward Island', 
      'Nova Scotia',
      'New Brunswick',
      'Quebec'
    ],
    selectedLocation: 'British Columbia'
  }

  startOnboard = () => { 
    this.setState({
      choosingSpecies: true,
      started: true
    });
  }

  onSubmitSpecies = (event) => {
    this.setState({
        choosingSpecies: false,
        choosingLocation: true
      })
    event.preventDefault();
  }

  onChangeSpecies = (event) => {
    console.log('this is the species ' + event.target.value)
    this.setState({
      selectedSpecies: event.target.value
    });
  }

  
  onChangeLocation = (event) => {
    console.log('this is the location ' + event.target.value)
    this.setState({
      selectedLocation: event.target.value
    });
  }
  
  onSubmitLocation = (event) => {
    this.setState({
      choosingLocation: false,
      finished: true
    });
    event.preventDefault();
    this.props.setFinalLocation(this.state.selectedLocation);
  }

  render() {
    const welcomeMessage = (
      <div>
        <img src={fish} alt="A fish" />
        <h2>Welcome to Fishprice!</h2>
        <button onClick={this.startOnboard}>Get Started</button>
      </div>
    )

    return (
      <div>

        {(!this.state.choosingSpecies && !this.state.started) ? welcomeMessage : null }
        
        {this.state.choosingSpecies ? <SpeciesSelector 
          species={this.state.species}
          onSubmitSpecies={this.onSubmitSpecies}
          onChangeSpecies={this.onChangeSpecies}
          /> : null}

        {this.state.choosingLocation ? <LocationSelector 
          locations={this.state.locations} 
          onSubmitLocation={this.onSubmitLocation}
          onChangeLocation={this.onChangeLocation}
          /> : null }
        
      </div>
    )
  }
}

export default Onboard;