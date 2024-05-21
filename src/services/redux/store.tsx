import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import AddItem from './Reducers/AddItem';
import favoriteReducer from './Reducers/FavariteItem';
import CardBag from './Reducers/CardBag';
import CardList from './Reducers/CardList';
const rootReducer = combineReducers({
  userReducer: AddItem,
  fevarite: favoriteReducer,
  cardReducer: CardBag,
  ItemList: CardList,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
