import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import router from 'phone/router';
import store from 'phone/store';

// require style to generate one css file
require('../styles/phone.scss');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-81610948-1', 'auto');

const rootElement = document.getElementById('main');
if (rootElement) {
    render(<Provider store={store}>{router(browserHistory)}</Provider>, rootElement);
}
