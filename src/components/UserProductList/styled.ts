import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;

  @media (max-width: 920px) {
    width: 100%;
  }
`;
