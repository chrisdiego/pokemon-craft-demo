export const setSelectedPokemon = selected => ({
  type: 'SET_SELECTED_POKEMON',
  payload: selected
})

export const addPokemonToBag = pokemon => ({
  type: 'ADD_SELECTED_POKEMON',
  payload: pokemon
})

export const removePokemonFromBag = pokemon => ({
  type: 'REMOVE_SELECTED_POKEMON',
  payload: pokemon
})