import types from '../Type/type';

const initialState = {
  dataList: [],
};

const CardList = (state = initialState, action) => {
   switch (action.type) {
    case types.CARD_LIST:
      return {
        ...state,
        dataList: action.payload,
      };
    default:
      return state;
  }
};
export default CardList;
