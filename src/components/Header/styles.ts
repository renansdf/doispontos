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
  }

  a:nth-child(1){ transition: transform .8s ease-in-out, letter-spacing .3s; }
  a:nth-child(2){ transition: transform .95s ease-in-out, letter-spacing .3s; }
  a:nth-child(3){ transition: transform 1.1s ease-in-out, letter-spacing .3s; }
  
  ${props => props.isVisible && css`
    left: 0;

    a{ transform: translateX(0) }
  `}

  a img{
    width: 80%;
    max-width: 550px;
    transition: transform .3s;

    &:hover{
      transform: scale(1.02);
    }
  }

  @media(max-width: 500px){
    a img{
      width: 180px;
    }
  }
`

export const MenuBurger = styled.img`
  width: 40px;
  height: auto;
`

export const SimpleBurguer = styled.div<{bgColor: string}>`
  width: 50px;
  height: 4px;

  background-color: #000;

  ${props => props.bgColor !== '' && css`
    background-color: ${props.bgColor}
  `}
`