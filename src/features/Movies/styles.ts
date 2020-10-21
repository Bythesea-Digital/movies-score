import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 48px;
`;

type HeaderType = {
  haveMovies: boolean;
};

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
  .error {
    color: #e66a6a;
    padding: 24px 0;
  }
`;
