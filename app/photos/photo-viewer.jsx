import { Component } from 'react';
import Icon from 'rk/components/icon';
import Modal from 'rk/components/modal';

class PhotoViewer extends Component {
    constructor(props) {
        super(props);
        this.dismissEventHandler = event => {
            if (event.target.className.indexOf('rk-modal-layover') === 0) {
                this.props.closePopup('viewer');
            }
        };
        this.navigate = event => {
            switch (event.keyCode) {
                case 37: // left
                    this.props.onLeft();
                    return;
                case 39: // right
                    this.props.onRight();
                    return;
                case 27: // esc
                    this.props.closePopup('viewer');
                    return;
            }
        };
    }

    render() {
        return (
            <div className={this.props.className}>
                <Icon
                    className="fa-chevron-left photo-viewer__navigation"
                    onClick={this.props.onLeft}/>
                <img className="photo-viewer__image" src={this.props.imageUrl} />
                <Icon
                    className="fa-chevron-right photo-viewer__navigation"
                    onClick={this.props.onRight}/>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('click', this.dismissEventHandler);
        window.addEventListener('keydown', this.navigate);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.dismissEventHandler);
        window.removeEventListener('keydown', this.navigate);
    }
}

export default Modal(PhotoViewer);
