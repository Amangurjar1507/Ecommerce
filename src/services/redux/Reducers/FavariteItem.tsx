import types from '../Type/type';

const initialState = {
  favoriteItems: [],
  favorite: false,
};
const favoriteReducer = (state = initialState, action) => {
   switch (action.type) {
    case types.FAVORITE_ITEM:
      let temp = state.favoriteItems;
      temp.push(action.payload);
      return {
        ...state,
        favoriteItems: temp,
      };
    case types.LIKE_UPDATE:
      return {
        ...state,
        favoriteItems: action.payload,
      };
    case types.UNFAVORITE_ITEM:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          user => user.id != action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
