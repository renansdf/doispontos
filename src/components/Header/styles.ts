import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 9;
  background: #fff;
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