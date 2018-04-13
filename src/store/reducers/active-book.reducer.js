import { BOOK_SELECTED } from "../actions";
import { BOOK_DELETED } from "../actions";

export default function(state = null, action) {
    switch(action.type) {
        case BOOK_SELECTED:
            return action.payload
        case BOOK_DELETED: {
            if (action.payload == state.title) {
                return null
            } else {
                return state
            }
        }     
    }
    return state
}