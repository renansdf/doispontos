import styled, { css } from 'styled-components';
import { type Asset } from 'contentful';

interface ICoverFrames {
  frames: Asset[];
  frameToggle: boolean;
}

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: block;
`

export const Cover = styled.section<{ bgUrl: string }>`
  width: 100%;
  height: 62vh;

  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2<{ hexColor: string }>`
  font-size: 4vw;
  padding: 20px 45px 19px;
  background-color: rgba(255,255,255,1);
  box-shadow: 0 0 20px #fff;
  border-radius: 50px;

  color: ${props => props.hexColor};
`

export const ProjectCotent = styled.section`
  display: flex;
  padding: 60px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`

export const CoverAnimation = styled.article<ICoverFrames>`
  width: 100%;
  max-width: 850px;
  height: 500px;
  background-size: cover;

  background-image: url(${props => props.frames[0].fields.file.url});

  ${props => props.frameToggle && css`
    background-image: url(${props.frames[1].fields.file.url});
  `}
`

export const Image = styled.img`
  max-width: 450px;
  max-height: 300px;
  width: 100%;
`