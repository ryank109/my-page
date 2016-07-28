import { Component } from 'react';

export default class RegistryItem extends Component {
    render() {
        return (
            <a className="registry-item" href={this.props.href} target="_blank">
                <img className="registry-item__image" src={this.props.imgSrc} />
            </a>
        );
    }
}
