import AdminLogin from 'rk/login';
import AdminPage from 'rk/admin';
import AdminGuestsPage from 'rk/admin/guests';
import AdminCommentsPage from 'rk/admin/comments';
import App from 'rk/app';
import CommentPage from 'rk/comments';
import Home from 'rk/home';
import NoPage from 'rk/no';
import PhotosPage from 'rk/photos';
import RegistryPage from 'rk/registry';
import YesPage from 'rk/yes';
import { IndexRoute, Router, Route } from 'react-router';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="adminlogin" component={AdminLogin} />
                <Route path="comment" component={CommentPage} />
                <Route path="no" component={NoPage} />
                <Route path="photos" component={PhotosPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="sooandryanadmin" component={AdminPage}>
                    <IndexRoute component={AdminGuestsPage} />
                    <Route path="guests" component={AdminGuestsPage} />
                    <Route path="comments" component={AdminCommentsPage} />
                </Route>
                <Route path="yes" component={YesPage} />
            </Route>
        </Router>
    );
}
