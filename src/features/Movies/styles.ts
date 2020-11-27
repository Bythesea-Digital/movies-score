import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 48px;
`;

type HeaderType = {
  haveMovies: boolean;
};

export const Container = styled.header<HeaderType>`
  //background: #102a43;
  //background-color: #8EC5FC;
transition: all 0.50s linear;
background-image: ${({ theme }) => theme.background };
  padding: 80px;
  text-align: center;
  min-height: 100vh;
  .app-version {
    border-radius: 15px;
    background: white;
    font-size: 12px;
    padding: 2px 8px;
  }
  .title {
    color: white;
    margin-top: 16px;
    letter-spacing: 1px;
  }
  .subtitle {
    color: white;
  }
  .error {
    color: #e66a6a;
    padding: 24px 0;
  }
  
 @media screen and (max-width: 768px){
    padding: 80px 24px;
    
    .error{
    img{
      width: 320px;
    }
    }
  }
`;
