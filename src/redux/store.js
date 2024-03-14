import { combineReducers, createStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {bookmarksReducer} from './bookmarksReducer.js'


const rootReducer = combineReducers({
    bookmarks: bookmarksReducer
})

export const store = createStore(rootReducer, composeWithDevTools())