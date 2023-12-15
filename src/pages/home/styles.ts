import styled, { css } from 'styled-components';

export const Container = styled.main`
  scroll-snap-type: y proximity;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

interface ILinkTextProps {
  hexColor: string;
}

export const LinkText = styled.span<ILinkTextProps>`
  color: #266bd9;

  ${props => css`
    color: ${props.hexColor};
  `}

  font-size: 4em;
  font-weight: 400;
  max-width: 50%;
  text-align: center;

  opacity: 0;
  transition: opacity .7s;

  @media(max-width: 580px){
    max-width: 90%;
  }

  @media(max-width: 480px){
    font-size: 42px;
  }
`;