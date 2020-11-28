const { compose, createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { productsReducer } = require("./reducers/productReducers");

const initialState = {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose ;
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;