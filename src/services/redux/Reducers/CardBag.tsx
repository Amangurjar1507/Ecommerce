import types from '../Type/type';
const initialState = {
  Card: [],
};
const CardBag = (state = initialState, action) => {
  // console.log(
  //   'sbag Card data remove card --->',
  //   JSON.stringify(action.payload),
  // );
  switch (action.type) {
    case types.CARD_ITEM:
      let temp = state.Card;
      temp.push(action.payload);
      // let myIndex = -1;
      return {
        ...state,
        Card: temp,
      };

    case types.CARD_REMOVE:
      return {
        ...state,
        Card: state.Card.filter(user => user.id != action.payload.id),
      };
    default:
      return state;
  }
};
export default CardBag;
