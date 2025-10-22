import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: #c3c2c1;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f6f4;
  margin: 0.5rem 0px;
  border-radius: 4px;
  padding: 1rem 0;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ContainerCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 1rem 0;
  }
`;

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0px 0.5rem;
  cursor: pointer;
`;

interface PropsImage {
  width?: string;
}

export const Img = styled.img<PropsImage>`
  width: ${(props) => (props.width ? props.width : '50px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 4px;
`;
