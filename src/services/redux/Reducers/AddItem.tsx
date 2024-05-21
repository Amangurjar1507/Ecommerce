import types from '../Type/type';
const initialState = {
  data: [],
  login: {},
};

const AddItem = (state = initialState, action) => {
   switch (action.type) {
    case types.SIGNUP_DATA:
      let temp = state.data;
      temp.push(action.payload);
      return {
        ...state,
        data: temp,
      };
    case types.LOGIN_DATA:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};
export default AddItem;
