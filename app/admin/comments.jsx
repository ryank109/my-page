import { map } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from 'rk/admin/actions';

const selector = state => {
    return {
        comments: state.app.comments
    };
};

class Comments extends Component {
    render() {
        return (
            <div className="list">
                <div>Comments</div>
                <div className="list__header">
                    <div className="comment__name">Name</div>
                    <div className="comment__comments">Comments</div>
                </div>
                <ul className="list__body">{this.renderComments()}</ul>
            </div>
        );
    }

    renderComments() {
        return map(this.props.comments, comment => (
            <li className="list__item" key={comment._id}>
                <div className="comment__name">{comment.name}</div>
                <div className="comment__comments">{comment.comment}</div>
            </li>
        ));
    }

    componentDidMount() {
        this.props.fetchComments();
    }
}

export default connect(selector, { fetchComments })(Comments);
