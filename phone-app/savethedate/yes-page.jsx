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
                            The following weekend of our wedding is the <span className="highlighted-text">Super Bowl</span> in Houston. If you are traveling from far, we urge you to get your plane tickets <span className="highlighted-text">ASAP</span>!
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

    done() {
        this.props.dispatch(push('/'));
    }
}

export default connect(selector)(YesPage);
