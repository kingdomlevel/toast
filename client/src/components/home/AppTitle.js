import styled from 'styled-components';

const Title = styled.h1`
  font-size: 10vw;
  font-family: monospace;

`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;


function AppTitle() {

  return (
    <>
    <TitleContainer>
    <Title>Toasty Tunes</Title>
    </TitleContainer>
    </>
  )

}
export default AppTitle;
