import classNames from 'classnames';
import { forEach, reduce } from 'lodash';
import { Component } from 'react';
import { MENUS, MENU_DETAILS } from 'rk/menu/actions';
import Divider from 'rk/components/divider';
import Icon from 'rk/components/icon';

const LAST_INDEX = MENUS.length - 1;

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { xPos: 0 };
        this._refs = {};

        forEach(MENUS, menu => {
            this.state[menu.route] = false;
        });
    }

    render() {
        const xOffset = this.props.menuXPosition - this.props.menuOffset;
        const style = { left: `${xOffset}px` };

        return (
            <ul className="menu" ref="menu" style={style} >
                {this.renderMenus()}
            </ul>
        );
    }

    renderMenus() {
        return reduce(MENUS, (result, route, i) => {
            const menu = MENU_DETAILS[route];
            const isActive = route === this.props.activeRoute;
            const isHover = !!this.state[route];
            const itemClassName = classNames({
                'menu__item': true,
                'menu__item--active': isActive
            });
            const iconClassName = classNames({
                'menu__item__icon': true,
                'menu__item__icon--hover': isHover,
                [menu.icon]: true
            });

            result.push(
                <li
                    className={itemClassName}
                    key={route}
                    ref={c => { this._refs[route] = c; }}
                >
                    <Icon
                        className={iconClassName}
                        onClick={() => this.props.navigate(route)}
                    />
                </li>
            );
            if (i < LAST_INDEX) {
                result.push(<Divider key={`div_${route}1`} />);
                result.push(<Divider key={`div_${route}2`} />);
                result.push(<Divider key={`div_${route}3`} />);
            }
            return result;
        }, []);
    }

    getContainerWidth() {
        return this.refs.menu.getBoundingClientRect().width;
    }

    getMenuItemLeft(route) {
        return this._refs[route].getBoundingClientRect().left;
    }
}
