import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Calendar from 'rk/components/calendar';

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
                <div className="page-block">
                    <div className="page-block__inner">
                        <div className="home-title" />
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner">
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner">
                        <div className="subtitle1">1 • 28 • 2017</div>
                        <div className="subtitle2">Houston, TX</div>
                    </div>
                </div>
                <div className="page-block page-footer">
                    <div className="page-block__footer">
                        <Link className="page-block__footer__hint page-block__footer__hint--left" to="/comment">&lt; Leave a message!</Link>
                        <Link className="page-block__footer__hint page-block__footer__hint--right" to="/registry">Registry &gt;</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(selector)(HomePage);
