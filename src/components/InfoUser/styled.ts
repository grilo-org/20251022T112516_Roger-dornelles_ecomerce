import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(100% - 230px);
  justify-content: center;

  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  background-color: #f5f5f5;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 0;

  label {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0.3rem 0;

    div {
      display: flex;
      align-items: center;
      width: 100%;

      input,
      select {
        width: 100%;
        border: none;
        outline: none;
        padding: 0.4rem 0.3rem;
        border-radius: 4px;
      }

      span {
        margin-left: 0.2rem;
        margin-top: 2px;
        color: #c8c6c6;
        cursor: pointer;

        &:hover {
          color: #a6a9b6;
        }
      }
    }

    @media (max-width: 540px) {
      width: 100%;
    }

    @media (max-width: 1280px) {
      width: 90%;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 1rem 0;

  a {
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    transition: all 1.2s;
    background-color: #f15a59;

    &:hover {
      transition: all 1.2s;
      background-color: #df2e38;
    }

    @media (max-width: 920px) {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  button {
    padding: 0.5rem 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: all 1.2s;
    background-color: #b3ffae;

    &:hover {
      transition: all 1.2s;
      background-color: #38e54d;
    }

    @media (max-width: 920px) {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 920px) {
    width: 100%;
    flex-direction: column !important;
  }
`;

export const NewPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    input[type='checkbox'] {
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 6px;
      margin-left: 5px;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 1rem;

      input {
        width: 100%;
        border: none;
        outline: none;
        padding: 0.4rem 0.3rem;
        border-radius: 4px;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 920px) {
    width: 50%;
    flex-direction: column !important;
  }

  @media (max-width: 540px) {
    width: 100%;
    flex-direction: column !important;
  }
`;
