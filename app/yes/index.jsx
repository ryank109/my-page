import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { popupActions } from 'react-redux-popup';
import HomePage from 'rk/home';
import YesModal from 'rk/yes/yes-modal';

class YesPage extends Component {
    render() {
        return (
            <HomePage>
                <YesModal
                    closePopup={this.close.bind(this)}
                    id="yesModal"
                    height={400}
                    width={500} />
            </HomePage>
        );
    }

    componentDidMount() {
        this.props.openPopup('yesModal');
    }

    close() {
        this.props.closePopup('yesModal');
        this.props.push('/');
    }
}

export default connect(null, {
    push,
    ...popupActions
})(YesPage);
