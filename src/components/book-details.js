import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book </div>
        } else {
            return (
                <div>
                    <h3>{this.props.book.title}</h3>
                    <div>{this.props.book.pages}</div>
                </div>
            )
        }
    }
}

//state je AppState(Redux)
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)