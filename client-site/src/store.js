import { combineReducers, applyMiddleware,createStore } from "redux";
import ReduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllPizzasReducer,addPizzasReducer,getPizzaByIdReducer,updatePizzaByIdReducer} from "./reducer/Reducer"
import {cartReducer} from "./reducer/CartReducer"
import { regiterUserReducer,loginUserReducer,getAllUsersReducer } from "./reducer/Userreducer";
import { placeOrderReducer,getUserOrdersReducer, allUserOrdersReducer, } from "./reducer/orderReducer";

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer=combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    regiterUserReducer:regiterUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzasReducer:addPizzasReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer: allUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer
})

const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];
const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer: {
        currentUser: currentUser,
      },
}
const middleware=[ReduxThunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;