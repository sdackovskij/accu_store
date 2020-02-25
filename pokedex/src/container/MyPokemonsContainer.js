import { connect } from "react-redux";
import { axiosDataMyPokemons } from "../store/actions/cardsAction";
import { isActiveLoadMore } from "../store/actions/loadButtonAction";
import { resetPage } from "../store/actions/resetPageAction";
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
    axiosData: onPage => dispatch(axiosDataMyPokemons(onPage)),
    isActiveLoadMore: (page, total) => dispatch(isActiveLoadMore(page, total)),
    resetPage: function() {dispatch(resetPage())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
