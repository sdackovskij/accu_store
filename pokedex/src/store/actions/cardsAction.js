import axios from "axios";
import {
  AXIOS_DATA_LOAD,
  AXIOS_DATA_LOADING,
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

export function axiosDataMyPokemons(onPage) {

  return dispatch => {
    dispatch(loadingStart());
    axios
      .get(`http://localhost:3000/my_pokemons?_page=1&_limit=${onPage}`)
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






