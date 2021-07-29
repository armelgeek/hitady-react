import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers';
const initialState = {};
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const persistConfig = {
  key: "shoppingcart",
  whitelist: ["cart"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  bindMiddleware([thunkMiddleware])
);
store.__persistor = persistStore(store);
export default store;