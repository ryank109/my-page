import { IndexRoute, Router, Route } from 'react-router';
import App from 'rk/app';
import Home from 'rk/home';
import CommentPage from 'rk/comments';
import RegistryPage from 'rk/registry';
import AdminLogin from 'rk/login';
import AdminPage from 'rk/admin';
import YesPage from 'rk/yes';
import NoPage from 'rk/no';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="comment" component={CommentPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="yes" component={YesPage} />
                <Route path="no" component={NoPage} />
                <Route path="adminlogin" component={AdminLogin} />
                <Route path="sooandryanadmin" component={AdminPage} />
            </Route>
        </Router>
    );
}
