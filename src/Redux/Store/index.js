import {createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { Course } from "../Reducer/Course";
import { User } from "../Reducer/User";
const rootReducer =combineReducers({
    Course,User
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export default store