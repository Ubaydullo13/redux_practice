import { combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    counter: "counter"
})

export const store = createStore(rootReducer)