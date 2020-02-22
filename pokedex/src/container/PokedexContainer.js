import { connect } from "react-redux";
import {
  axiosData,
  isActiveLoadMore,
  resetPage,
  addToMyPokedex,
 
} from "../store/actions/cardsAction";
import Content from "../components/LayoutComponents/ContentLayout";

function mapStateToProps(state) {
  return {
    pokemons: state.cards.pokemons,
    onCurentPage: state.cards.onCurentPage,
    endOfList: state.cards.endOfList,
    loading: state.cards.loading,
    total: state.cards.total
  };
}

function mapDispatchToProps(dispatch) {
  return {
    axiosData: onPage => dispatch(axiosData(onPage)),
    isActiveLoadMore: (page, total) => dispatch(isActiveLoadMore(page, total)),
    resetPage: () => dispatch(resetPage()),
    addToMyPokedex: (name, id) => dispatch(addToMyPokedex(name, id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
