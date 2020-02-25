import axios from "axios";
import { ADD_TO_MY_POKEDEX } from "./actionTypes";

export function addToMyPokedex(pokemon_name, pokemon_id) {
  return dispatch => {
    const payload = {
      name: pokemon_name,
      id: pokemon_id,
      isMy: true,
      date: new Date()
    };
    axios
      .put(`http://localhost:3000/pokemons/${pokemon_id}`, {
        name: payload.name,
        id: payload.id,
        isMy: payload.isMy,
        date: payload.date
      })
      .then(() => {
        dispatch(AfteraddToMyPokedex(payload));
      });

    axios.post(`http://localhost:3000/my_pokemons`, {
      name: payload.name,
      id: payload.id,
      isMy: payload.isMy,
      date: payload.date
    });
  };
}

export function AfteraddToMyPokedex(payload) {
  return {
    type: ADD_TO_MY_POKEDEX,
    payload
  };
}
