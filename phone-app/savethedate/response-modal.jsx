import { Component } from 'react';
import { Modal } from 'react-redux-popup';
import Button from 'phone/components/button';

class ResponseModal extends Component {
    render() {
        return (
            <div className="modal__content">
                <div>Yay! We are so excited to have you!</div>
                <div>We just need your mailing address for the invitation</div>
                <div className="form-section">
                    <div className="form-input">
                        <input className="input" type="text" placeholder="Address" />
                    </div>
                    <div className="form-input">
                        <input className="input input-city" type="text" placeholder="City" />
                    </div>
                    <div className="form-input">
                        <input className="input input-state" type="text" placeholder="State" size="4" />
                        <input className="input input-zip-code" type="number" placeholder="Zip Code" size="8"/>
                    </div>
                </div>
                <div className="form-input">
                    <input className="input" type="text" placeholder="Phone #" size="14"/>
                </div>
                <div className="form-input">
                    <textarea rows="3" placeholder="Say something to us!"/>
                </div>
                <div className="modal__content__buttons">
                    <Button
                        label="Submit"
                        className="page__button"
                        onClick={this.props.yes}
                    />
                </div>
            </div>
        );
    }
}

export default Modal(ResponseModal);
