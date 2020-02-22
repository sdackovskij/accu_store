import { connect } from "react-redux";
import {
    axiosData,
    isActiveLoadMore,
    resetPage,
    addToMyPokedex,
} from "../store/actions/myPokemonsAction";
import Content from "../components/LayoutComponents/ContentLayout";

function mapStateToProps(state) {
    
    return {
        pokemons: state.myPokemons.pokemons,
        onCurentPage: state.myPokemons.onCurentPage,
        endOfList: state.myPokemons.endOfList,
        loading: state.myPokemons.loading,
        total: state.myPokemons.total
    };
}

function mapDispatchToProps(dispatch) {
    return {
        axiosData: (onPage) => dispatch(axiosData(onPage)),
        isActiveLoadMore: (page, total) => dispatch(isActiveLoadMore(page, total)),
        resetPage: function(){ dispatch(resetPage())},
        addToMyPokedex: (name, id) => dispatch(addToMyPokedex(name, id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);