import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const ProductList = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 1670px) {
    width: 90%;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`;

export const LI = styled.li`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  background-color: #efefef;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 1rem 0;

  @media (max-width: 1220px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IMG = styled.img`
  width: 40px;
  height: 30px;
  margin-right: 1rem;
  border-radius: 4px;

  @media (max-width: 920px) {
    width: 50%;
    height: 40%;
    margin-right: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  text-align: left;

  @media (max-width: 1220px) {
    width: 100%;
    text-align: center;
  }
`;

export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

interface ButtonProps {
  background: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  background-color: ${(props) => (props.background ? props.background : '#ccc')};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;

  @media (max-width: 920px) {
    width: 100%;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 920px) and (max-width: 1220px) {
    width: 70%;
    margin-top: 0.5rem;
  }
`;
