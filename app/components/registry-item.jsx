import classNames from 'classnames';
import { Component } from 'react';

export default class RegistryItem extends Component {
    render() {
        const className = classNames('registry-item', this.props.className);
        return (
            <a className={className} href={this.props.href} target="_blank">
                <img className="registry-item__image" src={this.props.imgSrc} />
            </a>
        );
    }
}
