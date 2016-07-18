import { delay, get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';
import saveTheDateActions from 'phone/savethedate/actions';

const selector = (state, ownProps) => {
    return {
        email: get(ownProps.location.query, 'email'),
        screenWidth: state.app.screenWidth
    };
};

class SaveTheDateForm extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <span className="top-title">Soo ♥ Ryan</span>
                        <span>1 • 28 • 2017</span>
                        <span className="subtitle2">Houston, TX</span>
                        <span className="subtitle1">Save the date!</span>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-button-title">Will you be able to make to our wedding?</div>
                        <div className="form-buttons">
                            <Button
                                label="Yes/Maybe"
                                className="page__button page__button__left"
                                onClick={this.yes.bind(this)}
                            />
                            <Button
                                label="No"
                                className="page__button"
                                onClick={this.no.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.checkSaveTheDateResponse(this.props.email);
    }

    yes() {
        this.props.responseToSaveTheDate('ryank109@gmail.com', true);
    }

    no() {
        this.props.responseToSaveTheDate('ryank109@gmail.com', false);
    }
}

export default connect(selector, {
    ...saveTheDateActions
})(SaveTheDateForm);
