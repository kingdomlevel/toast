import styled from 'styled-components';

const Title = styled.h1`
  font-size: 10vw;
  font-family: monospace;
  color: #f5e960;

`;

const TitlePic = styled.img`
  width: 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;


function AppTitle() {

  return (
    <>
    <TitleContainer>
    <TitlePic src={'./toot-toot-person.png'} />
    <Title>Toasty Tunes</Title>
    </TitleContainer>
    </>
  )

}
export default AppTitle;
