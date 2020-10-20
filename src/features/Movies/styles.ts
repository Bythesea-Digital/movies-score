import styled from "styled-components";

export const Container = styled.div`
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -54px;
  padding-top: 48px;
`;

type HeaderType = {
    haveMovies: boolean
}

export const Header = styled.header<HeaderType>`
  background-image: linear-gradient(32deg, #102a43 0, #486581 100%);
  padding: 56px;
  text-align: center;
  min-height: ${({haveMovies}) => haveMovies ? 55 : 100}vh;
  .app-version {
    border-radius: 15px;
    background: white;
    font-size: 12px;
    padding: 2px 8px;
  }
  .title {
    margin-top: 16px;
    color: white;
    letter-spacing: 1px;
  }
  .subtitle {
    color: white;
  }
`;
