import { combineReducers } from "redux";
import cartReducer from './cart';
import dataReducer from "./dataReducer";
import filterReducer from "./filters/hotels/filterReducer";
import orderReducer from "./order";
export default combineReducers({
  cart: cartReducer,
  data: dataReducer,
  filter: filterReducer
});
