import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 15%;
  text-align: center;
  margin: 0 auto;
  justify-content: space-around;
  padding: 1rem 0;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin: 0 0.5rem;
  }

  button:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 920px) {
    width: 25%;
    padding: 1.5rem 0;
    font-size: 20px;
  }

  @media (max-width: 420px) {
    width: 45%;
    padding: 1.5rem 0;
  }
`;
