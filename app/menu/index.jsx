import classNames from 'classnames';
import { forEach, reduce } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { MENUS, MENU_DETAILS, setMenuPosition } from 'rk/menu/actions';
import Divider from 'rk/components/divider';
import Icon from 'rk/components/icon';

const LAST_INDEX = MENUS.length - 1;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._refs = {};

        forEach(MENUS, menu => {
            this.state[menu.route] = false;
        });
    }
    render() {
        return (
            <ul className="menu">
                {this.renderMenus()}
            </ul>
        );
    }

    renderMenus() {
        return reduce(MENUS, (result, route, i) => {
            const menu = MENU_DETAILS[route];
            const isActive = route === this.props.activeRoute;
            const isHover = !!this.state[route];
            const style = this.state[route];
            let labelStyle = {
                opacity: isHover ? 1 : 0,
                ...style
            };
            const iconClassName = classNames({
                'menu__item__icon': true,
                'menu__item__icon--hover': isHover,
                'menu__item__icon--active': isActive,
                [menu.icon]: true
            });

            result.push(
                <li
                    className="menu__item"
                    key={route}
                    ref={c => { this._refs[route] = c; }}
                    onMouseOver={this.mouseOverHandler(route)}
                    onMouseOut={this.mouseOutHandler(route)}
                >
                    <Icon
                        className={iconClassName}
                        onClick={this.navigateTo(route)}
                    />
                    <label
                        className="menu__item__label"
                        ref={c => { this._refs[`${route}_label`] = c; }}
                        style={labelStyle}
                    >
                        {menu.title}
                    </label>
                </li>
            );
            if (i < LAST_INDEX) {
                result.push(<Divider key={`div_${route}`} />);
            }
            return result;
        }, []);
    }

    navigateTo(route) {
        return () => {
            this.props.setMenuPosition(route);
            this.props.push(route);
        }
    }

    mouseOverHandler(route) {
        return event => {
            const rect = this._refs[route].getBoundingClientRect();
            const labelRect = this._refs[this.getLabelRefKey(route)].getBoundingClientRect();
            const top = rect.bottom;
            const left = rect.left + (rect.width / 2) - (labelRect.width / 2);

            this.setState({
                [route]: { top, left }
            });
        };
    }

    mouseOutHandler(route) {
        return () => this.setState({ [route]: false });
    }

    getLabelRefKey(route) {
        return `${route}_label`;
    }
}

export default connect(null, { push, setMenuPosition })(Menu);
