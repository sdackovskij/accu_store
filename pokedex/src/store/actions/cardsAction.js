import axios from "axios";
import {
  AXIOS_DATA_LOAD,
  END_OF_DATA,
  AXIOS_DATA_LOADING,
  RESET_PAGE,
  ADD_TO_MY_POKEDEX,
  TOTAL_AMOUNT
} from "./actionTypes";

export function axiosData(onPage) {
  return dispatch => {
    dispatch(loadingStart());
    axios
      .get(`http://localhost:3000/pokemons?_page=1&_limit=${onPage}`)
      .then(db => {
        dispatch(axiosDataLoad(db));
        for (var pair of Object.entries(db.headers)) {
          if (pair[0] === "x-total-count") {
            dispatch(isTotal(pair[1]));
          }
        }
      });
  };
}

export function isTotal(total) {
  return {
    type: TOTAL_AMOUNT,
    total
  };
}

export function loadingStart() {
  return {
    type: AXIOS_DATA_LOADING
  };
}

export function axiosDataLoad(db) {
  return {
    type: AXIOS_DATA_LOAD,
    db
  };
}

export function isActiveLoadMore(total, onPageNumber) {
  return dispatch => {
    if (total < onPageNumber) {
      dispatch(endOfData("disabled"));
    } else {
      dispatch(endOfData(""));
    }
  };
}

export function endOfData(loadMoreButton) {
  return {
    type: END_OF_DATA,
    loadMoreButton
  };
}

export function resetPage() {
  return {
    type: RESET_PAGE
  };
}

export function addToMyPokedex(pokemon_name, pokemon_id) {
  return dispatch => {
    axios
      .put(`http://localhost:3000/pokemons/${pokemon_id}`, {
        
        name: pokemon_name,
        id: pokemon_id,
        isMy: true,
        date: new Date()
        
      }).then(() => {
        dispatch(AfteraddToMyPokedex(pokemon_id));
      });

      axios
        .post(`http://localhost:3000/my_pokemons`, {

         name: pokemon_name,
         id: pokemon_id,
         isMy: true,
         date: new Date()

       });
  };
}

export function AfteraddToMyPokedex(pokemonId) {
  return {
    type: ADD_TO_MY_POKEDEX,
    pokemonId

  };
}
