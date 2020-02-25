import { END_OF_DATA } from "./actionTypes";

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
