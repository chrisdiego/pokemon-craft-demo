import { connect } from 'react-redux'
import { setSelectedPokemon } from './actions'
import PokemonList from './PokemonList'

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSelectedPokemon: selected => dispatch(setSelectedPokemon(selected))
})

export default connect(
  null,
  mapDispatchToProps
)(PokemonList)