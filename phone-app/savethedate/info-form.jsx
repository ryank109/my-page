import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';

const selector = state => {
    return {
        isMissingName: state.app.isMissingName,
        isMissingPhoneNumber: state.app.isMissingPhoneNumber,
        screenWidth: state.app.screenWidth
    };
};

class InfoForm extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <div className="title2">Yay :) We are so excited to have you!</div>
                        <div className="form-text">We are missing your phone # for contact.  This is just incase we need to contact you.</div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <div className="form-section">
                            <input className="input input--required" type="text" placeholder="Name" />
                        </div>
                        <div className="form-section form-section--last">
                            <input className="input" type="text" placeholder="Phone #" size="14"/>
                        </div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-buttons">
                            <Button
                                label="Submit"
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

export default connect(selector)(InfoForm);
