const defaultState = {
    bookmarks: 0
}

 export function bookmarksReducer(state=defaultState, actions){
   switch (actions.type) {
    case 'ADD':
        return {...state, bookmarks: state.bookmarks + 1}
        case 'REMOVE':
            return {...state, bookmarks: state.bookmarks - 1}
            case 'ASSIGN':
                return {...state, bookmarks: actions.payload}
   
    default:
        return state
   }
}