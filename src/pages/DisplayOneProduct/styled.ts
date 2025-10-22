import styled from 'styled-components';

type StyledProps = {
  size?: string;
  bold?: string;
};

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 80%;

  margin: 0 auto;
  margin-top: 5rem;
  color: #000;

  @media (max-width: 1250px) {
    width: 98%;
  }

  @media (max-width: 900px) {
    width: 98%;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 1250px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 590px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  /* margin-bottom: 1rem; */
  border: 1px solid #555;
  border-radius: 4px;
`;

export const ProductContainer = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1.2rem 0;

  @media (max-width: 1250px) {
    /* width: 100%; */
    margin-left: 2rem;
  }

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.p<StyledProps>`
  display: flex;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: ${(props) => (props.bold ? props.bold : '')};
`;

export const ProductDescription = styled.p<StyledProps>`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: ${(props) => (props.size ? props.size : '')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    padding-left: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const Span = styled.span`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f48484;
  color: #000;
  margin-top: 1rem;
  border-radius: 4px;
  padding: 0.2rem 0;
`;
