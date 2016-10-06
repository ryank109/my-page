import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'rk/components/button';
import { post } from 'phone/comment/actions';

const selector = state => {
    return {
        hasCommentError: state.app.hasCommentError,
        hasNameError: state.app.hasNameError,
        hasPosted: state.app.hasPosted
    };
};

class CommentPage extends Component {
    render() {
        if (this.props.hasPosted) {
            return this.renderThanks();
        }

        const inputNameClass = classNames({
            input: true,
            'input--error': this.props.hasNameError
        });
        const commentClass = classNames({
            input: true,
            textarea: true,
            'input--error': this.props.hasCommentError
        });

        return (
            <div className="comments">
                <div className="comments__container">
                    <input className={inputNameClass} type="text" placeholder="Your Name" ref="name"/>
                    <textarea className={commentClass} placeholder="Say something!" rows={7} ref="comment" />
                    <Button
                        label="Post"
                        className="page__button page__button__left button--primary"
                        onClick={this.post.bind(this)}
                    />
                </div>
            </div>
        );
    }

    renderThanks() {
        return (
            <div className="home-page__section home-page__message">
                <div className="home-page__message__container">
                    <div className="message-title">Thanks!</div>
                </div>
            </div>
        );
    }

    post() {
        this.props.post(this.refs.name.value, this.refs.comment.value);
    }
}

export default connect(selector, { post })(CommentPage);
