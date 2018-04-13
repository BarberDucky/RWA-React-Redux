import { BOOK_DELETED } from "../actions";

const initialState = [{
        title: "game of thrones",
        pages: 500
    },
    {
        title: "intro to redux",
        pages: 200
    },
    {
        title: "harry potter",
        pages: 300
    }
]

export default function (state = initialState, action) {
    switch(action.type) {
        case BOOK_DELETED:
            {
                console.log(state)
                return state.filter(book => book.title !== action.payload)
            }
    }
    return state
}