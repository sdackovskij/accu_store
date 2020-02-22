import axios from "axios";
import { TOTAL_AMOUNT } from "./actionTypes";

export function totalAmount() {
    return dispatch => {
        axios
            .head(`http://localhost:3000/pokemons?_page=1`)
            .then(db => {
                
                
            });
    };
}


