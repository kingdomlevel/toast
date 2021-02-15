import styled from 'styled-components';

const Title = styled.h1`
  font-size: 10vw;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #f5e960;

`;

const TitleTitleContainer = styled.div`
  width: 100%;
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
    <TitleTitleContainer>
    <TitleContainer>
    <TitlePic src={'./toot-toot-person.png'} />
    <Title>Toasty Tunes</Title>
    </TitleContainer>

    </TitleTitleContainer>
    </>
  )

}
export default AppTitle;
