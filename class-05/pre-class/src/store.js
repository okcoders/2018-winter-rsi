import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/search.reducer";
import { historyReducer } from "./history/history.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  history: historyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
