import counterReducer from "./Features/counterFeature/reducer";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from "redux-thunk";

let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;