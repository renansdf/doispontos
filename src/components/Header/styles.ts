import styled, { css } from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 9;
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;

  h1{
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    color: #707070;
  }
`;

export const HamburguerMenuButton = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  span {
    display: block;
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

  span{
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
    font-size: 80px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #000;

    &:hover{
      letter-spacing:10px;
    }
  }

  a:nth-child(1){ transition: transform .8s ease-in-out, letter-spacing .3s; }
  a:nth-child(2){ transition: transform .95s ease-in-out, letter-spacing .3s; }
  a:nth-child(3){ transition: transform 1.1s ease-in-out, letter-spacing .3s; }
  
  ${props => props.isVisible && css`
    left: 0;

    a{ transform: translateX(0) }
  `}
`