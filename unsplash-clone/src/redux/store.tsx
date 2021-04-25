import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;

export default store
