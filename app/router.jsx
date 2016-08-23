import { IndexRoute, Router, Route } from 'react-router';
import App from 'rk/app';
import Home from 'rk/home';
import StoryPage from 'rk/story';
import RsvpPage from 'rk/rsvp';
import RegistryPage from 'rk/registry';
import YesPage from 'rk/yes';
import NoPage from 'rk/no';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="story" component={StoryPage} />
                <Route path="rsvp" component={RsvpPage} />
                <Route path="registry" component={RegistryPage} />
                <Route path="yes" component={YesPage} />
                <Route path="no" component={NoPage} />
            </Route>
        </Router>
    );
}
