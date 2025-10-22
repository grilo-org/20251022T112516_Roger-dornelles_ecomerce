import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: calc(80% - 230px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin-top: 2.2rem;

  @media (max-width: 920px) {
    width: 100%;
  }
  @media (min-width: 920px) and (max-width: 1090px) {
    width: 100%;
    margin-left: 3rem;
  }
`;

export const form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  border-radius: 8px;

  label {
    margin: 0 auto;
    width: 80%;
    position: relative;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    margin-bottom: 2rem;

    input,
    textarea {
      display: flex;
      margin: 0 auto;
      width: 100%;
      height: 2.2rem;
      padding-left: 1rem;
      outline: none;
      border: 0;
      border-radius: 5px;
      background-color: #e8e8e8;
      margin-top: 0.5rem;
    }

    span {
      font-size: 0.8rem;
    }

    textarea {
      height: 7rem;
      padding: 1rem;
      resize: none;
    }

    input:focus,
    textarea:focus {
      border: 1px solid #a8a8a8;
    }

    @media (max-width: 1020px) {
      width: 100%;
    }
  }

  div {
    width: 60%;
    display: flex;
    align-items: center;
    margin: 0.5rem;

    select {
      width: 15%;
      height: 2rem;
      margin-left: 1rem;
      outline: none;
      cursor: pointer;
      border: none;
      border-radius: 4px;

      @media (max-width: 1020px) {
        width: 100%;
        margin-left: 0;
      }
    }

    input[type='number'],
    input[type='text'] {
      width: 15%;
      height: 2rem;
      padding-left: 1rem;
      outline: none;
      border: 0;
      border-radius: 5px;
      background-color: #e8e8e8;

      @media (max-width: 1020px) {
        width: 100%;
        padding-left: 0;
      }
    }

    input[type='number']:last-child {
      width: 20%;
      @media (max-width: 1020px) {
        width: 100%;
        padding-left: 0;
      }
    }

    select:focus,
    input[type='number']:focus {
      border: 1px solid #a8a8a8;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      margin-left: 1rem;

      @media (max-width: 1020px) {
        width: 100%;
        margin-left: 0;
      }
    }

    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
      margin: 0;
      margin-left: 1rem;

      @media (max-width: 1020px) {
        width: 100%;
        margin-left: 0;
      }
    }

    @media (max-width: 1020px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0 auto;
      margin-top: 1.2rem;
    }
  }

  div {
    display: flex;
    width: 80%;
    flex-wrap: wrap;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin-left: 0.4rem;
      margin-bottom: 0.5rem;
      border: 1px solid #a8a8a8;
      border-radius: 4px;
      padding: 0 0.7rem;

      &:hover {
        border-color: #6b728e;
      }

      span {
        cursor: pointer;
        margin-left: 0.3rem;
        margin-top: 8px;

        &:hover {
          color: #df2e38;
        }
      }
    }
  }
  @media (max-width: 1020px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectFiles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;

  label {
    margin-left: 0px;
    padding-bottom: 0.5rem;
    margin: 0;
    @media (max-width: 1020px) {
      width: 100%;
      margin: 0 auto;
      margin-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1.4rem;
    cursor: pointer;
    border: 0;
    border-radius: 4px;

    @media (max-width: 1020px) {
      margin-bottom: 1rem;
      width: 90%;
    }
  }

  button[type='submit'] {
    background-color: #7fc8a9;
    transition: all 1.3s;

    &:hover {
      background-color: #2eb086;
      transition: all 1.3s;
    }
  }

  button[type='reset'] {
    background-color: #e9e8e8;
    transition: all 1.3s;

    &:hover {
      transition: all 1.3s;
      background-color: #b2b2b2;
    }
  }
`;
