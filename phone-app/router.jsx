import { IndexRoute, Router, Route } from 'react-router';
import App from 'phone/app';
import CommentPage from 'rk/comments';
import HomePage from 'rk/home';
import RegistryPage from 'rk/registry';
import PhotosPage from 'phone/photos';
import PhotoViewer from 'phone/photos/photo-viewer';
import RsvpPage from 'rk/rsvp';
import RsvpIndex from 'rk/rsvp/rsvp-index';
import RsvpForm from 'rk/rsvp/rsvp-form';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="comment" component={CommentPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="story" component={RegistryPage} />
                <Route path="photos" component={PhotosPage} />
                <Route path="map" component={RegistryPage} />
            </Route>
            <Route path="photos/:photoId" component={PhotoViewer} />
            <Route path="rsvp" component={RsvpPage}>
                <IndexRoute component={RsvpIndex} />
                <Route path="form" component={RsvpForm} />
            </Route>
        </Router>
    );
}
