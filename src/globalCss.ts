import styled from 'styled-components';

export const Warning = styled.div`
  position: absolute;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f54b;
  padding: 0.2rem;
  color: #000;
  top: 0px;
  border-radius: 5px;
`;

export const Error = styled.div`
  position: absolute;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ea5455;
  padding: 0.2rem;
  color: #000;
  top: 0px;
  left: 30%;
  border-radius: 5px;
`;

export const Success = styled.div`
  position: absolute;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #38e54d;
  padding: 0.2rem;
  color: #000;
  top: 0px;
  border-radius: 5px;
`;

interface ButtonType {
  disabled?: boolean;
  width?: string;
}

export const Button = styled.button<ButtonType>`
  outline: none;
  border: none;
  padding: 0.5rem 1.3rem;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#03c988')};
  color: #fff;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  margin-top: 1rem;
  ${(props) => (props.disabled ? 'cursor: not-allowed;' : '')}

  &:hover {
    transition: ease-in-out 0.5s;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#03c999')};
    box-shadow: 2px 3px 7px #ccc;
  }
`;
