import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  padding: 1rem;
  flex-wrap: wrap;
  border-radius: 4px;

  @media (max-width: 920px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  font-weight: 600;
  color: #7f7f7f;
  margin: 0.3rem 0;

  &:last-child {
    color: #ff1717;
  }
`;

export const Button = styled.button`
  width: 30%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border: 0;
  cursor: pointer;
  background-color: #ff8282;
  transition: 1.2s ease;
  border-radius: 4px;
  color: #fff;

  &:hover {
    background-color: #ff5151;
    transition: 1.2s ease;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;
