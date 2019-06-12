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
  	}

  	togglePokemonInBag() {
  		if (this.state.notInBag) {
  			this.props.addPokemonToBag(this.props.selectedPokemon)
  			this.setState({notInBag: false})
  		} else {
  			this.props.removePokemonFromBag(this.props.selectedPokemon)
  			this.setState({notInBag: true})
  		}
  	}

	render() {

		const {
			selectedPokemon,
			addPokemonToBag,
			removePokemonFromBag,
			bag} = this.props;

		const {notInBag} = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<div className="pokemon-image p-5 border rounded mb-3">
							<img className="m-auto d-block" src={selectedPokemon.sprites.front_default} />
						</div>
						<span className="d-block text-center mb-5 pokemon-name">{selectedPokemon.name}</span>
						<span className="text-heading">Stats</span>
						<div className="pokemon-stats p-3 border rounded">
							<ul className="list-unstyled">
								<li><span className="key mt-2 mr-2">Height:</span><span className="value">{selectedPokemon.height}</span></li>
								<li><span className="key mt-2 mr-2">Weight:</span><span className="value">{selectedPokemon.weight}</span></li>
								<li><span className="key mt-2 mr-2">Type:</span> {selectedPokemon.types.map(type => <span>{type.name} </span>)}</li>
								<li><span className="key mt-2 mr-2">In Bag:</span> <button className={`button-checkbox border rounded ${notInBag ? "" : "button-checkbox-checked"}`} onClick={() => this.togglePokemonInBag()}></button></li>
							</ul>
						</div>
					</div>
					<div className="col-9">
					</div>
				</div>
			</div>
		);
	}
}

export default PokemonDetail;