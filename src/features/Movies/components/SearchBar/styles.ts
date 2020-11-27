import styled from "styled-components";

export const SearchContainer = styled.div`
  //background: #1d72aa;
  display: flex;
  justify-content: center;
  //position: relative;
  //top: -32px;
  z-index: 9;
  margin-top: 48px;
`;

export const SearchInput = styled.input`
  padding: 16px 24px;
  border-radius: 50px;
  background-color: #f0f4f8;
  border: none;
  width: ${({ minWidth }) => minWidth || 400}px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  font-size: 18px;
  margin-right: 16px;
  color: #102a43;
  &::placeholder {
    color: #9fb3c8;
  }
  &:focus {
    outline: unset;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.18);
  }
  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  padding: 14px 22px;
  background-color: #38bec9;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s;
  color: #e0fcff;
  border: 2px solid transparent;
  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.18);
  }
  &:focus {
    border: 2px solid #044e54;
    outline: unset;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    background: #f0f4f8;
    color: #9fb3c8;
    cursor: not-allowed;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;
