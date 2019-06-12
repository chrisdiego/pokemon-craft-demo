import { connect } from 'react-redux'
import PokemonDetail from './PokemonDetail'
import { addPokemonToBag, removePokemonFromBag } from './actions'

const mapStateToProps = state => ({
  selectedPokemon: state.selectedPokemon,
  bag: state.bag
})

const mapDispatchToProps = dispatch => ({
  addPokemonToBag: pokemon => dispatch(addPokemonToBag(pokemon)),
  removePokemonFromBag: pokemon => dispatch(removePokemonFromBag(pokemon))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)