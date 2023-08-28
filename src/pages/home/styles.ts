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

  font-size: 7em;
  letter-spacing: .05em;
  font-weight: 700;
  max-width: 50%;
  text-align: center;

  opacity: 0;
  transition: opacity .3s;

  &:hover{
    opacity: 1;
  }
`;