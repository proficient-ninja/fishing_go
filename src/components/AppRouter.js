import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
