import React, { Component } from 'react';

class PokemonDetail extends Component {

	constructor() {
	    super();
	    this.state = {
	      pokemonLocation: [],
	      notInBag: true
	    };

	    this.togglePokemonInBag = this.togglePokemonInBag.bind(this);
  	}

	componentDidMount() {
	    fetch(`https://api.craft-demo.net/pokemon/${this.props.selectedPokemon.id}`, {headers: {
            'x-api-key': 'HHko9Fuxf293b3w56zAJ89s3IcO9D5'
        }})
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	console.log(result);
	          this.setState({
	            pokemonLocation: result,
	          });
	        }
	      )

	    const testBag = this.props.bag.every((pokemon) => pokemon.name != this.props.selectedPokemon.name);
		this.setState({notInBag: testBag})
  	}

  	togglePokemonInBag() {
  		if (this.state.notInBag) {
  			this.props.addPokemonToBag(this.props.selectedPokemon)
  		} else {
  			this.props.removePokemonFromBag(this.props.selectedPokemon)
  		}
  	}

	render() {

		const {
			selectedPokemon,
			addPokemonToBag,
			removePokemonFromBag,
			bag} = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<div className="pokemon-image p-5 border rounded mb-3">
							<img className="m-auto d-block" src={selectedPokemon.sprites.front_default} />
						</div>
						<span className="d-block text-center mb-5 pokemon-name">{selectedPokemon.name}</span>
						
						<ul className="list-unstyled">
							<li>Height: {selectedPokemon.height}</li>
							<li>Weight: {selectedPokemon.weight}</li>
							<li>Type: {selectedPokemon.types.map(type => <span>{type.name} </span>)}</li>
							<li>Add To Bag: <button type="checkbox" checked={this.state.notInBag} onClick={() => this.togglePokemonInBag()}></button></li>
						</ul>
					</div>
					<div className="col-9">

					</div>
				</div>
			</div>
		);
	}
}

export default PokemonDetail;