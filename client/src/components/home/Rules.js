import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.button`
  font-weight: 600;
  margin: 10px;
  width: 100px;
  border: none;
  color: #FF7B9C;
  background-color: #41EAD4;
  border-radius: 30px;
  padding: 5px;
`;

function Rules() {

  return (
    <div>
      <p>The rules are the rules and you should always follow the rules. Very big rules.</p>
      <Link to="/">
        <BackButton>Back</BackButton>
      </Link>
    </div>
  )

}
export default Rules;
