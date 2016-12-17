import { IndexRoute, Router, Route } from 'react-router';
import AdminLogin from 'rk/login';
import AdminPage from 'rk/admin';
import AdminGuestsPage from 'rk/admin/guests';
import AdminCommentsPage from 'rk/admin/comments';
import App from 'rk/app';
import CommentPage from 'rk/comments';
import Home from 'rk/home';
import InfoPage from 'rk/info';
import NoPage from 'rk/no';
import PhotosPage from 'rk/photos';
import RegistryPage from 'rk/registry';
import RsvpPage from 'rk/rsvp';
import RsvpIndex from 'rk/rsvp/rsvp-index';
import RsvpForm from 'rk/rsvp/rsvp-form';
import YesPage from 'rk/yes';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="comment" component={CommentPage} />
                <Route path="info" component={InfoPage} />
                <Route path="no" component={NoPage} />
                <Route path="photos" component={PhotosPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="yes" component={YesPage} />
            </Route>
            <Route path="rsvp" component={RsvpPage}>
                <IndexRoute component={RsvpIndex} />
                <Route path="form" component={RsvpForm} />
            </Route>
            <Route path="adminlogin" component={AdminLogin} />
            <Route path="sooandryanadmin" component={AdminPage}>
                <IndexRoute component={AdminGuestsPage} />
                <Route path="guests" component={AdminGuestsPage} />
                <Route path="comments" component={AdminCommentsPage} />
            </Route>
        </Router>
    );
}
