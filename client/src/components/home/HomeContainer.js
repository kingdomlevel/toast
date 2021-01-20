import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';
import GameConnect from './GameConnect';

function HomeContainer() {

  return (
    <div>
      <AppTitle />
      <Link to="/rules">
        <button>Rules</button>
      </Link>
      <GameConnect />
    </div>
  );

}

export default HomeContainer;