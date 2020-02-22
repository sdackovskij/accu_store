import { connect } from "react-redux";
import OnePokemon from "../components/ViewComponents/OnePokemon";

function mapStateToProps(state) {

    return {
        pokemons: state.cards.pokemons
    };
}

export default connect(mapStateToProps)(OnePokemon);