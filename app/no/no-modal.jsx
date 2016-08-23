import { Component } from 'react';
import Button from 'rk/components/button';
import Modal from 'rk/components/modal';

class NoModal extends Component {
    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="rk-modal-body form form-content">
                    <div className="form-title">We'll miss you...</div>
                    <div className="form-text">If you ever change your mind, click <span className="highlighted-text">Yes</span> from your original email message!</div>
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

export default Modal(NoModal);
