import { Paragraph } from './../TypeCard/styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Close = styled.span`
  color: #d90000;
  position: absolute;
  right: 2rem;
  top: 1rem;
  cursor: pointer;
  text-align: right;

  @media (max-width: 1024px) {
    right: 0rem;
  }
`;

export const ContainerDescriptionProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 4px;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  position: relative;
`;

export const ContainerInputOrTextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  padding-left: 1rem;
  border: 1px solid #eaeaea;

  &:focus {
    border: 1px solid #d1d1d1;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
interface InputValueOrQuantityProps {
  error?: boolean;
}
export const InputValueOrQuantity = styled(Input)<InputValueOrQuantityProps>`
  width: 40%;

  &:focus {
    border: ${(props) => props.error && '1px solid #ff6262'};
  }

  @media (max-width: 1024px) {
    width: 70%;
  }
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  outline: none;
  border: 1px solid #eaeaea;
  resize: none;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;

  &:focus {
    border: 1px solid #d1d1d1;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 30%;
  border: 0;
  outline: none;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;

  @media (max-width: 1024px) {
    width: 70%;
  }
`;

export const OptionsSelect = styled.option`
  color: #6c6c6c;
`;

export const Error = styled.span`
  width: 100%;
  color: #ff6262;
  text-align: left;
  position: absolute;
  bottom: -1.1rem;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 50%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.4rem 0;
  border-radius: 4px;
  color: #ffffff;
  background-color: #00d736;

  &:hover {
    background-color: #00ca33;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
