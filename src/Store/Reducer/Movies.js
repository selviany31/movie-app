const initialState = {
  moviesData: [],
  genresData: [],
  movieDetail: [],
  reviewData: [],
  watchlist: JSON.parse(localStorage.getItem("watchList")) ?? [],
  // movieByGenre: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        moviesData: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genresData: action.payload,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "GET_MOVIE_BY_GENRE":
      return {
        ...state,
        moviesData: action.payload,
      };
    case "GET_MOVIE_REVIEW":
      return {
        ...state,
        reviewData: [action.payload, ...state.reviewData],
      };
    case "SET_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.concat(action.payload),
      };
  }
  return state;
};
