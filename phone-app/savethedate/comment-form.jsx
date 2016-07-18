import { get } from 'lodash';
import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';

const selector = (state, ownProps) => {
    return {
        email: get(ownProps.location.query, 'email'),
        screenWidth: state.app.screenWidth
    };
};

class CommentForm extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <div className="title2">Would you like to leave any comment?</div>
                        <div className="form-text">If you are flying to Houston, we urge you to book your flight ASAP as Houston will host SUPERBOWL LI a week after our wedding! You may fly into IAH or HOU. Please let us know if you have any concern. </div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <textarea className="input textarea" placeholder="Comments" />
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-buttons">
                            <Button
                                label="Submit"
                                className="page__button form-button"
                                onClick={this.props.yes}
                            />
                            <Button
                                label="Skip"
                                className="page__button"
                                onClick={this.props.yes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(selector)(CommentForm);
