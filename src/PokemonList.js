import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {

	constructor() {
	    super();
	    this.state = {
	      pokemonResults: [],
	      showAll: true,
	      searchValue: ""
	    };

	    this.toggleDisplay = this.toggleDisplay.bind(this);
	    this.handleChange = this.handleChange.bind(this);
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

  	toggleDisplay() {
  		this.setState({showAll: !this.state.showAll})
  	}

  	handleChange(event) {
	    this.setState({searchValue: event.target.value});
	}

	render() {
	  const {setSelectedPokemon, bag} = this.props;
	  const {pokemonResults, showAll, searchValue} = this.state;

	  return (
	    <div className="pokemon-list container">
	    	<div className="row">
	    		<div className="button-container m-auto pb-5">
	    			<button className={` ${showAll ? "button-info" : "button-secondary"} button mr-2`} onClick={() => this.toggleDisplay()}>All</button><button className={` ${showAll ? "button-secondary" : "button-info"} button ml-2`} onClick={() => this.toggleDisplay()}>Bag</button>
	    		</div>
	    	</div>
	    	<div className="row">
	    		<div className="search-container m-auto pb-5">
	    			<input placeholder="Seach Pokemon" type="text" value={searchValue} onChange={this.handleChange}></input>
	    		</div>
	    	</div>
	    	<div className="row">
				{
					(showAll ? pokemonResults : bag).filter((pokemon) => 
						pokemon.name.toLowerCase().includes(searchValue)
						).map((pokemon) => {
						return (
							<Pokemon setSelectedPokemon={setSelectedPokemon} className="col-3" pokemonData={pokemon} />
						);
					})
				}
			</div>
	    </div>
	  );
	}
}

export default PokemonList;
