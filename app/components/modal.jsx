import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { Modal } from 'react-redux-popup';
import Icon from 'rk/components/icon';

export default function(CompositComponent) {
    class ModalContainer extends Component {
        render() {
            const className = classNames('rk-modal__container', this.props.className);
            const style = {
                height: `${this.props.height}px`,
                width: `${this.props.width}px`
            };
            return <CompositComponent {...this.props} className={className} style={style} />;
        }
    }

    ModalContainer.propTypes = {
        className: PropTypes.string,
        closePopup: PropTypes.func.isRequired,
        height: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired
    };

    const rkModal = Modal(ModalContainer);
    rkModal.defaultProps = {
        layoverClassName: 'rk-modal-layover',
        popupClassName: 'rk-modal rk-modal--show'
    };
    return rkModal;
}
