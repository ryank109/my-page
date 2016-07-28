import { get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';
import saveTheDateActions from 'phone/savethedate/actions';

const selector = (state, ownProps) => {
    return {
        attend: state.app.attend,
        email: get(ownProps.location.query, 'email'),
        screenWidth: state.app.screenWidth
    };
};

class SaveTheDatePage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <span>Soo ♥ Ryan</span>
                        <span className="subtitle1">1 • 28 • 2017</span>
                        <span className="subtitle2">Houston, TX</span>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-button-title">Will you be able to make to our wedding?</div>
                        <div className="form-buttons">
                            <Button
                                label="Yes/Maybe"
                                className="page__button page__button__left"
                                onClick={() => this.props.responseToSaveTheDate(this.props.email, 'Y', this.props.attend)}
                            />
                            <Button
                                label="No"
                                className="page__button"
                                onClick={() => this.props.responseToSaveTheDate(this.props.email, 'N', this.props.attend)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(selector, {
    ...saveTheDateActions
})(SaveTheDatePage);
