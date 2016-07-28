import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'phone/components/button';

const selector = state => {
    return {
        screenWidth: state.app.screenWidth
    };
};

export default class NoPage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <div className="form-title">We'll miss you...</div>
                        <div className="form-text">If you ever change your mind, click <span className="highlighted-text">Yes</span> from your original email message!</div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-buttons">
                            <Button
                                label="Done"
                                className="page__button"
                                onClick={this.done.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    done() {
        this.props.dispatch(push('/'));
    }
}

export default connect(selector)(NoPage);
