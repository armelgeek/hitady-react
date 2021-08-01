import { combineReducers } from "redux";
import cartReducer from './cart';
import filterReducer from "./filters/hotels/filterReducer";
import orderReducer from "./order";
import authReducer from './auth';
export default combineReducers({
  cart: cartReducer,
  hotels: filterReducer,
  auth: authReducer,
});
