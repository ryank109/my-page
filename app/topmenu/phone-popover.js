import { Component } from 'react';
import { Popup } from 'react-redux-popup';
import TopMenu from 'rk/topmenu';

class TopMenuPopover extends Component {
    render() {
        return <TopMenu />;
    }
}

export default Popup(TopMenuPopover);
