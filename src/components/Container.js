import styled, { css } from "styled-components";

const Container = styled.div`
  z-index: 1;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      width: 100%;
      max-width: 100%;
    `}
`;

export default Container;
