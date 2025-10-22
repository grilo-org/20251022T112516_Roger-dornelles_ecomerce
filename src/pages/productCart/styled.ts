import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #c1c1c1;
  margin-top: 3rem;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  width: 50%;
  border-radius: 8px;
  padding: 2.2rem 1.8rem;
  color: #000;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const UL = styled.ul`
  list-style: none;
`;

export const LI = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem 0;

  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const IMG = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 1rem;
  margin-left: 2rem;

  @media (max-width: 420px) {
    width: 30%;
    height: 15%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;
  margin: 0 auto;
`;

interface ButtonsType {
  disabled?: boolean;
}
export const Buttons = styled.button<ButtonsType>`
  font-size: 1.5rem;
  margin: 0.4rem;
  border: none;
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Span = styled.span`
  text-align: center;
  font-size: 1rem;
  padding: 0px 15px;
`;
