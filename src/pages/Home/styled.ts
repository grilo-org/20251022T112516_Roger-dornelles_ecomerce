import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const Section = styled.section`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem auto;
  flex-wrap: wrap;

  @media (max-width: 380px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProductAll = styled.div`
  width: calc(90% / 3);
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #eeeeee;
  padding: 1rem;
  border-radius: 5px;
  flex-wrap: wrap;
  margin: 1rem;

  &:hover {
    border: 1px solid #dddddd;
    box-shadow: 2px 5px 30px #ccc;
  }

  a {
    color: #000;
    width: 100%;
    height: 100%;
    text-decoration: none;

    img {
      width: 100%;
      height: 12rem;
      background-size: cover;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }

  @media (max-width: 1390px) {
    width: calc(90% / 2);
  }

  @media (max-width: 940px) {
    width: 90%;
    font-size: 28px;
  }
  @media (max-width: 830px) {
    width: 90%;
    font-size: 20px;
  }
  @media (max-width: 750px) {
    width: 90%;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;
