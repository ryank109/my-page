import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { popupActions } from 'react-redux-popup';
import HomePage from 'rk/home';
import NoModal from 'rk/no/no-modal';

class NoPage extends HomePage {
    render() {
        return (
            <div>
                {super.render()}
                <NoModal
                    closePopup={this.close.bind(this)}
                    id="noModal"
                    height={250}
                    width={450} />
            </div>
        );
    }

    componentDidMount() {
        this.props.openPopup('noModal');
    }

    close() {
        this.props.closePopup('noModal');
        this.props.push('/');
    }
}

export default connect(null, {
    push,
    ...popupActions
})(NoPage);
