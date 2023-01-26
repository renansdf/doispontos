import styled, { css } from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 9;
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    color: #707070;
  }
`;

export const MenuButton = styled.button`
  font-weight: bold;
  font-size: 26px;
`

interface IContainerProps {
  isVisible: boolean;
}

export const MenuContainer = styled.div<IContainerProps>`
  display: none;

  ${props => props.isVisible && css`
    display: flex;
  `}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, .7);
`