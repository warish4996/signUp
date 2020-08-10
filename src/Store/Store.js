import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { reducer } from "./reducer";


/**
 * Rootreducer object to combine all reducers
 */
const rootReducer = combineReducers({
    reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, enhancers(applyMiddleware(thunk)));

/**
 * Store configureation
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;