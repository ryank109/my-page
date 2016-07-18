import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import router from 'phone/router';
import store from 'phone/store';

// require style to generate one css file
require('../styles/phone.scss');

const rootElement = document.getElementById('main');
if (rootElement) {
    render(<Provider store={store}>{router(browserHistory)}</Provider>, rootElement);
}
