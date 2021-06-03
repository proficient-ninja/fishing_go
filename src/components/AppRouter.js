import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Main from '../pages/Main';
import Weather from '../pages/Weather';
import Find from '../pages/Find';
import Mypage from '../pages/Mypage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/mypage" component={Mypage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
