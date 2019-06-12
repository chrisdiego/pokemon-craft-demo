import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {

	constructor() {
	    super();
	    this.state = {
	      pokemonResults: [],
	    };
  	}

	componentDidMount() {
	    fetch("https://pokeapi.co/api/v2/pokemon")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            pokemonResults: result.results
	          });
	        }
	      )
  	}

	render() {
	  return (
	    <div className="pokemon-list container">
	    	<div className="row">
				{
					this.state.pokemonResults.map((pokemon) => {
						return (
							<Pokemon setSelectedPokemon={this.props.setSelectedPokemon} className="col-3" pokemonData={pokemon} />
						);
					})
				}
			</div>
	    </div>
	  );
	}
}

export default PokemonList;
