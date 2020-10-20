import styled from "styled-components";

export const Container = styled.div`
  //background: #f0f4f8;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  //position: relative;
  //top: -54px;
  padding-top: 48px;
`;

type HeaderType = {
    haveMovies: boolean
}

export const Header = styled.header<HeaderType>`
  background: #102a43;
  padding: 56px;
  text-align: center;
  min-height: 100vh;
  transition: all ease-in-out 0.2s;
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
  .error{
    color: red;
    padding: 24px 0;
  }
`;
