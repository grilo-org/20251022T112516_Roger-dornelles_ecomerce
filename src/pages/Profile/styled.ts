import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  color: #000;
  width: 70%;
  justify-content: flex-start;

  @media (max-width: 280px) {
    width: 99%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 540px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 920px) {
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
