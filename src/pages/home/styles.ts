import styled, { css } from 'styled-components';
import { type Asset } from 'contentful';

export const Container = styled.main`
  scroll-snap-type: y proximity;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

interface IFrameProps {
  frameStep: boolean;
  animationFrames: Asset[];
}

export const Project = styled.section<IFrameProps>`
  scroll-snap-align: center;

  width: 100%;
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${props => css`
    background-image: url(${props.animationFrames[0].fields.file.url});
  `}

  ${props => !props.frameStep && css`
    background-image: url(${props.animationFrames[1].fields.file.url});
  `}

  a{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    transition: all .7s;

    ${props => props.frameStep && css`
      background-color: rgba(255,255,255,.85);
    `}
  }
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

  &:hover{
    opacity: 1;
  }

  @media(max-width: 580px){
    max-width: 90%;
  }

  @media(max-width: 480px){
    font-size: 42px;
  }
`;