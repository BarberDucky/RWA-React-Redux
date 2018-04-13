import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { selectBook } from '../store/actions'
import {deleteBook} from '../store/actions'

class BookList extends Component {
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
    renderList() {
        if (!this.props.books) {
            return <span>Loading...</span>
        } else {
            return this.props.books.map(book => {
                return (
                    <li key={book.title}  > 
                        <span onClick={() => this.props.select(book)}> {book.title} </span>
                        <button onClick={() => this.props.brisi(book)}> X </button>
                    </li>

                )
            })
        }
    }
}

//state je AppState(Redux)
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: selectBook,
        brisi: deleteBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)