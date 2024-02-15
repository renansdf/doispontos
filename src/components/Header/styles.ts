import styled, { css } from 'styled-components';

import { defaultValues } from '../../globalStyles';

export const Container = styled.nav<{menuColor: string, showBackground: boolean}>`
  position: fixed;
  z-index: 9;
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${defaultValues.padding};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;

  h1{
    font-size: 2em;
    font-weight: 500;
    color: #000;
  }

  ${props => props.showBackground && css`
    background-color: #fff;
  `}

  ${props => props.menuColor !== '' && css`
    h1{
      color: ${props.menuColor};
    }
  `}

  @media(max-width: 380px){
    h1{
      font-size: 21px;
    }
  }
`;

export const HamburguerMenuButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img:first-child{
    margin-bottom: 2.4px;
  }

  div + div{
    margin-top: 6px;
  }

  @media(max-width: 380px){
    div + div {
      margin-top: 4px;
    }
  }
`

export const CloseMenuButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor: pointer;

  img{
    max-width: 40px;
    display: block;
  }
`

interface IContainerProps {
  isVisible: boolean;
}

export const MenuOverlay = styled.div<IContainerProps>`
  width: 100vw;
  background: rgba(255, 255, 255, 1);
  transition: left .6s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
  
  a {
    transform: translateX(25vw);
    text-align: center;
  }

  a:nth-child(1){ transition: transform .8s ease-in-out, letter-spacing .3s; img{ width: 75%; } }
  a:nth-child(2){ transition: transform .95s ease-in-out, letter-spacing .3s; img{ width: 80%; } }
  a:nth-child(3){ transition: transform 1.1s ease-in-out, letter-spacing .3s; img{ width: 100%; } }
  a:nth-child(4){ transition: transform 1.25s ease-in-out, letter-spacing .3s; img{ width: 90%; } }
  
  ${props => props.isVisible && css`
    left: 0;

    a{ transform: translateX(0) }
  `}

  a img{
    width: 100%;
    max-width: 500px;
    transition: transform .3s;
    margin: -25px 0;
    filter: saturate(1.4);

    &:hover{
      transform: scale(1.02);
    }
  }

  @media(max-width: 500px){
    a{
      max-width: 85%;
    }
    a img{
      max-width: 100%;
      margin: -14px 0;
    }
  }
`

export const Logo = styled.img`
  width: 250px;
  height: auto;
`

export const SimpleBurguer = styled.div<{bgColor: string}>`
  width: 50px;
  height: 4px;

  background-color: #000;

  ${props => props.bgColor !== '' && css`
    background-color: ${props.bgColor};
  `}

  @media(max-width: 380px){
    width: 30px;
  }
`