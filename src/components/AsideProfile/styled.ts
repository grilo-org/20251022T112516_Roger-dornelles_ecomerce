import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: #a1c2f1;
  color: black;
  padding: 2rem 0;
  margin-top: 2rem;
  border-radius: 4px;

  @media (max-width: 540px) {
    flex-direction: row;
    width: 90%;
  }

  /* @media (max-width: 920px) {
    flex-direction: row;
    width: 40%;
  } */
`;

export const Nav = styled.nav`
  width: 100%;
  margin-top: 3rem;
`;

export const UL = styled.ul`
  list-style: none;
  width: 95%;
  margin-left: 10px;

  @media (max-width: 540px) {
    margin-left: 18px;
  }
`;

interface PropsLI {
  active?: boolean;
}

export const LI = styled.li<PropsLI>`
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 0.3rem;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  ${(props) => (props.active ? 'background-color: #fff;' : 'color:#fff')};
`;
