import {combineReducers} from 'redux'
import BooksRecuder from './books.reducer'
import ActiveBookReducer from './active-book.reducer'

const rootReducer = combineReducers({
    books: BooksRecuder,
    activeBook: ActiveBookReducer
})

export default rootReducer
