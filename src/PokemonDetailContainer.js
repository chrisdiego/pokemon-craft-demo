import { connect } from 'react-redux'
import PokemonDetail from './PokemonDetail'

const mapStateToProps = (state, ownProps) => ({
  selectedPokemon: state.selectedPokemon
})

export default connect(
  mapStateToProps,
  null
)(PokemonDetail)