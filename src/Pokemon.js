import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Pokemon extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      pokemonInfo: {},
	      loaded: false
	    };
  	}

  	componentDidMount() {
	    fetch(`${this.props.pokemonData.url}`)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            pokemonInfo: result,
	            loaded: true
	          });
	        }
	      )
  	}

  	render() {
  		const {pokemonData, setSelectedPokemon} = this.props;
  		const {pokemonInfo} = this.state;

	  return (
	    <div className="pokemon-individual col-3 pb-5">
	    	<Link to={`/pokemon/${pokemonData.name}`} onClick={() => setSelectedPokemon(pokemonInfo)}>
		    	<div className="pokemon-container p-5 border rounded">
			    	{this.state.loaded ? <img className="m-auto d-block pb-3" src={pokemonInfo.sprites.front_default} /> : <div />}
					<span className="text-center d-block">{pokemonData.name}</span>
				</div>
			</Link>
	    </div>
	  );
	}
}


export default Pokemon;