import { delay } from 'lodash';
import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import Button from 'phone/components/button';
import Ring from 'rk/components/ring';
import actions from 'phone/actions';
import saveTheDateActions from 'phone/savethedate/actions';

const selector = (state) => {
    return {
        screenWidth: state.app.screenWidth
    };
};

class HomePage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        const className = classNames('page', this.props.className);

        return (
            <div className={className} style={style}>
                <div className="page__title">
                    <div className="title">
                        <span>1 • 28 • 2017</span>
                        <span className="subtitle1">Save the date!</span>
                    </div>
                </div>
                <div className="page__content">
                    <div>Soo ♥ Ryan</div>
                    <Ring />
                </div>
                <div className="page__footer">
                    <div>Invitation to follow!</div>
                </div>
                <SaveTheDateModal
                    layoverClassName="rk-modal-layover"
                    popupClassName="rk-modal"
                    id="saveTheDateForm"
                    closePopup={() => this.props.closePopup('saveTheDateForm')}
                    yes={this.yes.bind(this)}
                    no={this.no.bind(this)}
                />
                <SaveTheDateResponseModal
                    layoverClassName="rk-modal-layover"
                    popupClassName="rk-modal center"
                    id="saveTheDateResponseForm"
                />
            </div>
        );
    }

    componentWillMount() {
        this.props.checkSaveTheDateResponse(this.props.email);
    }

    componentDidMount() {
        this.props.openPopup('saveTheDateForm');
    }

    yes() {
        this.props.responseToSaveTheDate('ryank109@gmail.com', true);
    }

    no() {
        this.props.responseToSaveTheDate('ryank109@gmail.com', false);
    }
}

export default connect(selector, {
    ...actions,
    ...saveTheDateActions
})(HomePage);
