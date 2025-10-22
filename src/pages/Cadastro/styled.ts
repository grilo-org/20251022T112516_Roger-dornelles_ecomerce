import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #7f8487;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #efefef;
  padding: 2rem;
  border-radius: 12px;

  label {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 0.5rem 0;
    flex-direction: column;

    input {
      width: 70%;
      outline: none;
      border: 0;
      margin: 0.7rem 0;
      padding: 0.4rem 0 0.4rem 0.6rem;
      border-radius: 5px;
      background-color: #f9f9f9;

      @media (max-width: 970px) {
        width: 95%;
      }
    }

    input:focus {
      background-color: #fff;
    }

    input::placeholder {
      color: #ccc;
    }

    select {
      width: 40%;
      outline: none;
      border: 0;
      border-radius: 5px;
      padding: 0.4rem 0 0.4rem 0.6rem;

      @media (max-width: 970px) {
        width: 95%;
      }
    }

    @media (max-width: 970px) {
      width: 95%;
    }
  }

  div {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    label {
      width: 60%;
      padding: 1rem 0;
      input {
        width: 95%;
        padding: 0.4rem 0 0.4rem 0.6rem;
      }

      @media (max-width: 970px) {
        width: 95%;
      }
    }

    @media (max-width: 970px) {
      width: 95%;
      flex-direction: column;
    }
  }

  @media (max-width: 970px) {
    width: 95%;
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid #ccc;
    color: #000;
    padding: 0.2rem 0.8rem;
    border-radius: 3px;
    transition: all 1.3s;

    @media (max-width: 970px) {
      width: 95%;
    }
  }

  a:hover {
    transition: all 1.3s;
    border: 1px solid #b2b2b2;
    background-color: #d8d8d8;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1.3s;
    border: 1px solid #aeeaae;
    background-color: #9ed2c6;
    cursor: pointer;
    margin-left: 2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 3px;

    &:hover {
      transition: all 1.3s;
      background-color: #38e54d;
      border: 1px solid #03c988;
    }
    @media (max-width: 970px) {
      width: 95%;
      margin-top: 1rem;
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 970px) {
    width: 95%;
    flex-direction: column;
  }
`;
