import { IndexRoute, Router, Route } from 'react-router';
import App from 'phone/app';
import CommentPage from 'rk/comments';
import HomePage from 'rk/home';
import RegistryPage from 'rk/registry';
import PhotosPage from 'phone/photos';
import PhotoViewer from 'phone/photos/photo-viewer';

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
            <Route path="/photos/:photoId" component={PhotoViewer} />
        </Router>
    );
}
