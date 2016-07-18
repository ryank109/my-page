import { IndexRoute, Router, Route } from 'react-router';
import App from 'phone/app';
import SaveTheDateForm from 'phone/savethedate';
import SaveTheDatePage from 'phone/savethedate/app';
import InfoForm from 'phone/savethedate/info-form';
import CommentForm from 'phone/savethedate/comment-form';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="story" />
                <Route path="rsvp" />
                <Route path="registry" />
            </Route>
            <Route path="/savethedate" component={SaveTheDatePage}>
                <IndexRoute component={SaveTheDateForm} />
                <Route path="info" component={InfoForm} />
                <Route path="comment" component={CommentForm} />
            </Route>
        </Router>
    );
}
