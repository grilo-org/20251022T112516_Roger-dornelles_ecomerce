import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 0.7rem 0.5rem;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Selects = styled.select`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  outline: none;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  color: #7f8487;

  &:focus {
    border: 1px solid #ccc;
  }
`;

export const Options = styled.option`
  width: 100%;
`;
