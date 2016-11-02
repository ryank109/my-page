import { IndexRoute, Router, Route } from 'react-router';
import App from 'phone/app';
import CommentPage from 'rk/comments';
import HomePage from 'rk/home';
import RegistryPage from 'rk/registry';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="comment" component={CommentPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="story" component={RegistryPage} />
                <Route path="photos" component={RegistryPage} />
                <Route path="map" component={RegistryPage} />
            </Route>
        </Router>
    );
}
