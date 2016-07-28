import { IndexRoute, Router, Route } from 'react-router';
import App from 'phone/app';
import CommentPage from 'phone/comment';
import HomePage from 'phone/home';
import RegistryPage from 'phone/registry';
import YesPage from 'phone/savethedate/yes-page';
import NoPage from 'phone/savethedate/no-page';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="comment" component={CommentPage} />
                <Route path="info" />
                <Route path="registry" component={RegistryPage} />
                <Route path="yes" component={YesPage} />
                <Route path="no" component={NoPage} />
            </Route>
        </Router>
    );
}
