import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './components/home/HomeContainer';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomeContainer/>
      </Route>
    </Router>
  );
}

export default App;