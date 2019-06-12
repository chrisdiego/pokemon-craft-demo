import React, { Component } from 'react';

class PokemonDetail extends Component {

	constructor() {
	    super();
	    this.state = {
	      pokemonLocation: [],
	    };
  	}

	componentDidMount() {
		const fetchHeaders = new Headers({
  			'x-api-key': 'HHko9Fuxf293b3w56zAJ89s3IcO9D5'
		})

	    fetch(`https://api.craft-demo.net/pokemon/${this.props.selectedPokemon.id}`, {
		  headers: fetchHeaders
		})
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

	render() {

		const {selectedPokemon} = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<img className="m-auto d-block" src={selectedPokemon.sprites.front_default} />
						<span className="d-block text-center mb-5">{selectedPokemon.name}</span>
						<ul className="list-unstyled">
							<li>Height: {selectedPokemon.height}</li>
							<li>Weight: {selectedPokemon.weight}</li>
							<li>Type: {selectedPokemon.types.map(type => <span>{type.name} </span>)}</li>
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