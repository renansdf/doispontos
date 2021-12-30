import styled, { css } from 'styled-components';

interface IContainerProps{
  itemsAmount: number;
}

export const Container = styled.main<IContainerProps>`
  display: grid;
  grid-template-columns: 10% 1fr 5% 1fr 10%;
  grid-template-rows: 80px 80px repeat(calc(${props=>props.itemsAmount}*2 + 2), 200px);

  * {
    max-width: 100%;
    max-height: 100%;
  }

`;

interface IGridItem{
  position: number;
}

export const Title = styled.h2<IGridItem>`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
`;

export const Image = styled.img<IGridItem>`
  ${props => (props.position % 2 === 0 ? 
  css`
    /* even */
    grid-column: 4 / span 1;
    grid-row: calc(3 + ${(props.position/2)-1}*4) / span 3;
  ` : 
  css`
    /* odd */
    grid-column: 2 / span 1;
    grid-row: calc(1 + ${Math.floor(props.position/2)}*4) / span 3;
  `)}
`;