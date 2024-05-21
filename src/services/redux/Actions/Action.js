import types from '../Type/type';
const LoginData = data => ({
  type: types.LOGIN_DATA,
  payload: data,
});

const getData = data => ({
  type: types.SIGNUP_DATA,
  payload: data,
});

const favoriteItem = item => ({
  type: types.FAVORITE_ITEM,
  payload: item,
});

const unfavoriteItem = item => ({
  type: types.UNFAVORITE_ITEM,
  payload: item,
});
const CardAdd = item => ({
  type: types.CARD_ITEM,
  payload: item,
});
const CardRemove = item => ({
  type: types.CARD_REMOVE,
  payload: item,
});
const UptateFavarite = data => ({
  type: types.LIKE_UPDATE,
  payload: data,
});
const ListAction = data => ({
  type: types.CARD_LIST,
  payload: data,
});

export {
  getData,
  LoginData,
  favoriteItem,
  unfavoriteItem,
  CardAdd,
  CardRemove,
  UptateFavarite,
  ListAction,
};
