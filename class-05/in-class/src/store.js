import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { searchReducer } from "./search/search.reducer";
import { historyReducer } from "./history/history.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  search: searchReducer,
  history: historyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
