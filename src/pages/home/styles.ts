import styled, { css } from 'styled-components';
import { type Asset } from 'contentful';

export const Container = styled.main`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

interface IFrameProps {
  frameStep: boolean;
  animationFrames: Asset[];
}

export const Project = styled.section<IFrameProps>`
  scroll-snap-align: start;

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

export const LinkText = styled.span`
  background: #303030;
  color: #fff;
  padding: 100px 20px;
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: .1em;
  font-weight: 300;
  max-width: 200px;

  opacity: 0;
  transition: opacity .3s;

  &:hover{
    opacity: 1;
  }
`;