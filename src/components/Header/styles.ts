import React from 'react';
import styled from 'styled-components';

export const HeaderMenu = styled.nav`
  width: 90vw;
  //height: 72px;
  margin: 0 64px;
    padding: 0 48px;
  position: fixed;
  border-radius: 0 0 10px 10px;
  z-index: 9;
  top:0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(40px);
  display: grid;
  grid-template-areas: 'logo social-media';
  grid-template-columns: 64px 1fr;
  grid-template-rows: 72px;
  @media screen and (max-width: 1080px){
    border-radius: 0 ;
    width: 100vw;
    margin: 0;
    padding: 0 24px;
  }
  
`

export const BytheseaLogo = styled.a<React.HTMLProps<HTMLLinkElement>>`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
  width: 48px;
  
  }
`

export const HeaderButton = styled.div`
  margin-right: 24px;
  cursor: pointer;
  
`

export const SocialIconsContainer = styled.div`
  display: inline-flex;
  grid-area: social-media;
  justify-content: flex-end;
  align-items: center;
  
`

