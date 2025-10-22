import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  position: relative;
`;

export const Input = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  position: relative;

  form {
    width: 100%;
    display: flex;
    flex-direction: row;

    input {
      width: 100%;
      height: 1.9rem;
      border: 1px solid #b0b0b0;
      outline: none;
      border-radius: 5px;
      color: #7d7d7d;
      padding: 1.1rem 0;
      padding-left: 0.5rem;
      padding-right: 3.4rem;
      font-size: 1.1rem;
    }

    strong {
      width: auto;
      display: flex;
      margin-left: -2.2rem;
      align-items: center;
      font-size: 3.5rem;
      padding: 0 0.5rem;
      cursor: pointer;
      font-weight: 700;
      color: #aaaaaa;
      border-left: 1px solid #aaaaaa;

      &:hover {
        color: #4b4b4b;
      }
    }

    span {
      color: red;
      margin-left: -3.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  @media (max-width: 915px) {
    width: 65%;
  }
`;

export const BoxSearch = styled.div`
  width: 93%;
  max-height: 180px;
  background-color: #f2f2f2;
  color: #b6b6b6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-y: auto;
  position: absolute;
  z-index: 999;
  margin-top: 2.3rem;

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 915px) {
    width: 65%;
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Li = styled.li`
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  width: 100%;
  cursor: pointer;
  padding-left: 0.5rem;

  &:hover {
    background-color: #ebebeb;
  }
`;
