import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import HomeContainer from './components/home/HomeContainer';
import RoomContainer from './components/room/RoomContainer';
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
          
          let isHost = false;
          
          if (location.state) {
            isHost = location.state.isHost;
          } else if (localStorage.getItem(`room-${attemptedCode}`)) {
            const roomDeets = JSON.parse(localStorage.getItem(`room-${attemptedCode}`));
            isHost = roomDeets.roomClients[roomDeets.socketId].isHost;
          }

          return (
            <RoomContainer
              roomCode={attemptedCode}
              isHost={isHost}
            />
          )
        }}/>
      </Switch>
    </Router>
  );
}

export default App;