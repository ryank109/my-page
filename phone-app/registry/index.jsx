import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RegistryCB2 from 'rk/components/registry-cb2';
import RegistryCrateAndBarrel from 'rk/components/registry-crate-and-barrel';

const selector = (state) => {
    return {
        screenWidth: state.app.screenWidth
    };
};

class RegistryPage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        const className = classNames('page', this.props.className);

        return (
            <div className={className} style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <div>Registry</div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <RegistryCrateAndBarrel />
                        <RegistryCB2 />
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__footer">
                        <Link className="page-block__footer__hint page-block__footer__hint--left" to="/">&lt; Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(selector)(RegistryPage);
