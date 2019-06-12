const selectedPokemon = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POKEMON':
      return action.payload
    default:
      return state
  }
}

export default selectedPokemon