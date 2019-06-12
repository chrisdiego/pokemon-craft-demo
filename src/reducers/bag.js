const bag = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SELECTED_POKEMON':
      return [...state, action.payload];
    case 'REMOVE_SELECTED_POKEMON':
      return state.filter(pokemon => (!pokemon.name));
    default:
      return state
  }
}

export default bag