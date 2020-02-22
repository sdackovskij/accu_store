import {combineReducers} from 'redux'
import cardsReducer from './cardsReducer'
import myPokemonsReducer from "./myPokemonsReducer"

export default combineReducers({
    cards: cardsReducer,
    myPokemons: myPokemonsReducer,
})

function rootReducer(state, action) {
    return state
}