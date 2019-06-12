import { connect } from 'react-redux'
import { setSelectedPokemon } from './actions'
import PokemonList from './PokemonList'

const mapStateToProps = state => ({
  bag: state.bag
})

const mapDispatchToProps = dispatch => ({
  setSelectedPokemon: selected => dispatch(setSelectedPokemon(selected))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)