import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import HomeContainer from './components/home/HomeContainer';
import Rules from './components/home/Rules';

function App() {
  const [roomCode] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(routeProps) => {
          return (
            <HomeContainer {...routeProps}/>
          )
        }}
        />
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path={`/${roomCode}`} render={({location}) => {
          const attemptedCode = location.pathname.substring(1);    // strip leading slash from path
          console.log('attempted code:', attemptedCode)
          return (
            <p>room go here! code is {attemptedCode}</p>
            // <Room
            //   roomCode={gameCode}
            //   {...routeProps}
            // />
          )
        }}/>
      </Switch>
    </Router>
  );
}

export default App;