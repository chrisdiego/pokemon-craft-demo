import { combineReducers } from 'redux'
import selectedPokemon from './selectedPokemon'
import bag from './bag'

export default combineReducers({
  selectedPokemon,
  bag
})