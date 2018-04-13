export const BOOK_SELECTED = 'BOOK_SELECTED'
export const BOOK_DELETED = 'BOOK_DELETED'

export function selectBook(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}

export function deleteBook(book) {
    return {
        type: BOOK_DELETED,
        payload: book.title
    }
}