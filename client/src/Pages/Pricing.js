import React from 'react';
import Component, {mapStateToProps} from '../Component';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
//import { getUserInfo } from '../API';
import logo from '../assets/images/fish.png';
import fadedFish from '../assets/images/fish-faded.png';
import fish from '../assets/images/fish.png';
class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
    }

    render(){
        var jQuery = window['jQuery'];
		var selectedSpecies = this.getData("selectedSpecies");
		var selectedLocation = this.getData("selectedLocation");
		
        return(
            <div>
				<div>
					<img src={fish} alt="A fish" />
					<h2>Here is the Market Suggested Price for {selectedSpecies} in {selectedLocation}: </h2>
					<p>$17.65 per pound</p>
				</div>
            </div>
        );
    }
	onChangeSpecies = (event) => {

		var selectedSpecies = event.target.value;
		console.log('this is the species: ' + selectedSpecies)
		// this.setState({
		// 	selectedSpecies: selectedSpecies
		// });
		this.setData("selectedSpecies", selectedSpecies);

    }
	onNextClicked =(event)=>{
		const { history } = this.props;
		history.push("/location");
	}
}
export default connect(mapStateToProps)(CurrentPage);