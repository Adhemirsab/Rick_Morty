import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actiontypes";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        // myFavorites: [...state.allCharacters, action.payload],
        // allCharacters: [...state.allCharacters],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (user) => user.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
