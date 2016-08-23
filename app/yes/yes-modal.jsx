import { Component } from 'react';
import Button from 'rk/components/button';
import Modal from 'rk/components/modal';

class YesModal extends Component {
    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="rk-modal-body form form-content">
                    <div className="form-title">Thanks! :)</div>
                    <div className="form-text">Invitation will soon follow, keep checking your email!</div>
                    <div className="form-text">
                        Also... The following weekend of our wedding is the <span className="highlighted-text">Super Bowl in Houston</span>. If you are traveling from far, we urge you to get your <span className="highlighted-text">plane tickets</span> ASAP!
                    </div>
                    <div className="form-text">
                        We have blocked off rooms at <span className="highlighted-text">Magnolia Hotel</span>. Follow this link to <a href="https://resweb.passkey.com/Resweb.do?mode=welcome_ei_new&eventID=15661137" target="_blank">book the room</a>.
                    </div>
                </div>
                <div className="rk-modal-footer form form-footer">
                    <div className="form-buttons">
                        <Button onClick={this.props.closePopup} label="Ok" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal(YesModal);
