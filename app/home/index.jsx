import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';
import RegistryAmazon from 'rk/components/registry-amazon';
import RegistryCB2 from 'rk/components/registry-cb2';
import RegistryCrateAndBarrel from 'rk/components/registry-crate-and-barrel';
import { post } from 'phone/comment/actions';

const selector = state => {
    return {
        hasCommentError: state.app.hasCommentError,
        hasNameError: state.app.hasNameError,
        hasPosted: state.app.hasPosted
    };
};

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page__section home-page__cover">
                    <div className="home-page__cover__title">Soo ♥ Ryan</div>
                    <div className="home-page__cover__date">1 • 28 • 2017</div>
                    <div className="home-page__cover__location">Houston, TX</div>
                </div>
                <div className="home-page__section home-page__registry">
                    <div className="registry-title">Registry</div>
                    <div className="home-page__registry__container">
                        <RegistryCrateAndBarrel className="home-page__registry__item" />
                        <RegistryCB2 className="home-page__registry__item" />
                        <RegistryAmazon className="home-page__registry__item" />
                    </div>
                </div>
                {!this.props.hasPosted && this.renderCommentForm()}
                {this.props.hasPosted && this.renderThanks()}
            </div>
        );
    }

    renderCommentForm() {
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
            <div className="home-page__section home-page__message">
                <div className="message-title">Leave a message</div>
                <div className="home-page__message__container">
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

export default connect(selector, { post })(HomePage);
