import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'phone/components/button';

const selector = state => {
    return {
        screenWidth: state.app.screenWidth
    };
};

export default class YesPage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        return (
            <div className="page" style={style}>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <div className="form-title">Thanks! :)</div>
                        <div className="form-title">Invitation will soon follow, keep checking your email!</div>
                        <div className="form-title">Also...</div>
                        <div className="form-text">
                            The following weekend of our wedding is the <span className="highlighted-text">Super Bowl in Houston</span>. If you are traveling from far, we urge you to get your <span className="highlighted-text">plane tickets</span> ASAP!
                        </div>
                        <div className="form-text">
                            We have blocked off rooms at <span className="highlighted-text">Magnolia Hotel</span>. Follow this link to <a href="https://resweb.passkey.com/Resweb.do?mode=welcome_ei_new&eventID=15661137">book the room</a>.
                        </div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-buttons">
                            <Button
                                label="Ok"
                                className="page__button"
                                onClick={this.done.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        ga('send', 'pageview', 'yes');
    }

    done() {
        this.props.dispatch(push('/'));
    }
}

export default connect(selector)(YesPage);
