import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './components/home/HomeContainer';
import Rules from './components/home/Rules';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;