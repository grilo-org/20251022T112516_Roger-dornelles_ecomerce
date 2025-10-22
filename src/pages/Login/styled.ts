import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  margin: 0 auto;

  form {
    position: absolute;
    border-radius: 10px;
    margin: 0 auto;
    width: 40%;
    height: 30%;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    label {
      margin: 0 auto;
      width: 60%;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 2rem;

      input {
        display: flex;
        margin: 0 auto;
        width: 100%;
        height: 2.2rem;
        padding-left: 1.8rem;
        outline: none;
        border: 0;
        border-radius: 5px;
        background-color: #e8e8e8;
      }

      Input:focus {
        border: 1px solid #a8a8a8;
      }

      span {
        position: absolute;
        right: 0.3rem;
        margin-top: 28px;
        cursor: pointer;
      }

      strong {
        position: absolute;
        left: 0.2rem;
        font-size: 25px;
        margin-top: 18px;
        color: '#a8a8a8';
      }

      @media (max-width: 280px) {
        width: 99%;
      }

      @media (max-width: 540px) {
        width: 90%;
      }

      @media (max-width: 920px) {
        width: 70%;
      }
    }

    div {
      display: flex;
      width: 50%;
      margin: 0 auto;
      justify-content: space-around;
      text-align: center;

      a {
        transition: 1s all;
        min-width: 35%;
        padding: 0.3rem;
        text-decoration: none;
        background-color: #fa465b;
        border-radius: 5px;
        color: #fff;

        @media (max-width: 280px) {
          width: 80%;
          margin-bottom: 1rem;
        }
      }

      a:hover {
        transition: 1s all;
        background-color: #fa3246;
      }

      button {
        color: #fff;
        width: 35%;
        border: 0;
        cursor: pointer;
        background-color: #1fdb3e;
        padding: 0.3rem;
        border-radius: 5px;
        transition: 1.2s;

        @media (max-width: 280px) {
          width: 80%;
        }
      }

      button:hover {
        transition: 1.2s;
        background-color: #18c435;
        box-shadow: 4px 3px 5px #ccc;
      }

      @media (max-width: 280px) {
        width: 99%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
      }

      @media (max-width: 540px) {
        width: 90%;
        justify-content: space-between;
        align-items: center;
      }

      @media (max-width: 920px) {
        width: 70%;
        justify-content: space-between;
        align-items: center;
      }
    }

    @media (max-width: 280px) {
      width: 99%;
      display: flex;
      margin: 0 auto;
    }

    @media (max-width: 540px) {
      width: 90%;
      display: flex;
    }

    @media (max-width: 920px) {
      width: 70%;
      display: flex;
    }
  }

  @media (max-width: 280px) {
    width: 99%;
    display: flex;
    margin: 0 auto;
  }

  @media (max-width: 540px) {
    width: 95%;
    display: flex;
    margin: 0 auto;
  }
`;

export const Cadastro = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  a {
    color: #000;
    padding-left: 0.4rem;
  }

  @media (max-width: 280px) {
    width: 99%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const Warning = styled.div`
  display: flex;
  position: absolute;
  top: 0.5rem;
  left: calc(50% / 2);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background-color: #fff176;
  border-radius: 5px;
`;

export const Success = styled.div`
  display: flex;
  position: absolute;
  top: 0.5rem;
  left: calc(50% / 2);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background-color: #03c988;
  border-radius: 5px;
  color: #fff;
`;
