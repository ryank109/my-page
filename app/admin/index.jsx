import { map } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuests, fetchComments } from 'rk/admin/actions';

const selector = state => {
    return {
        guests: state.app.guests,
        comments: state.app.comments
    };
};

class AdminPage extends Component {
    componentDidMount() {
        this.props.fetchGuests();
        this.props.fetchComments();
    }

    render() {
        return (
            <div>
                <div className="list">
                    <div>Guests</div>
                    <div className="list__header">
                        <div className="guest__email">Email</div>
                        <div className="guest__attend">Attend</div>
                    </div>
                    <ul className="list__body">{this.renderGuests()}</ul>
                </div>
                <div className="list">
                    <div>Comments</div>
                    <div className="list__header">
                        <div className="comment__name">Name</div>
                        <div className="comment__comments">Comments</div>
                    </div>
                    <ul className="list__body">{this.renderComments()}</ul>
                </div>
            </div>
        );
    }

    renderGuests() {
        return map(this.props.guests, guest => (
            <li className="list__item" key={guest._id}>
                <div className="guest__email">{guest.email}</div>
                <div className="guest__attend">{guest.attend}</div>
            </li>
        ));
    }

    renderComments() {
        return map(this.props.comments, comment => (
            <li className="list__item" key={comment._id}>
                <div className="comment__name">{comment.name}</div>
                <div className="comment__comments">{comment.comment}</div>
            </li>
        ));
    }
}

export default connect(selector, { fetchGuests, fetchComments })(AdminPage);
