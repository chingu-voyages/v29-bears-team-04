import { createStore, combineReducers, applyMiddleware, compose, Store } from "redux";
import userReducer from "./reducers/userReducer";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
});

const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export default store;
