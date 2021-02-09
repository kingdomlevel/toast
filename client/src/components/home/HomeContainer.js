import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';
import GameConnect from './GameConnect';

function HomeContainer({history}) {

  return (
    <div>
      <AppTitle />
      <Link to="/rules">
        <button>Rules</button>
      </Link>
      <GameConnect history={history}/>
    </div>
  );

}

export default HomeContainer;