import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: #c3c2c1;
  margin-bottom: 1rem;
`;

export const UserInfoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
`;

interface InfoUserType {
  user?: boolean;
  newAddress?: boolean;
  disabled?: boolean;
}
export const InfoUser = styled.div<InfoUserType>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${(props) => (props.user ? 'background-color: #f8f6f4;' : 'background-color:white;')}
  padding: 1rem;
`;

export const InfoNewAddress = styled.div<InfoUserType>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${(props) => (props.newAddress ? ' display:flex;background-color: #f8f6f4;' : '  display:flex;')}
  ${(props) => (props.disabled ? 'cursor:not-allowed; opacity:0.5;' : '')}
  padding: 1rem;
`;

export const ParagraphNewAddress = styled.p`
  display: flex;
`;
export const UserInfoDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

export const Label = styled.label`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

interface SelectProps {
  disabled?: boolean;
}
export const Select = styled.select<SelectProps>`
  border: 1px solid #eeeeee;
  padding: 0.3rem 0;
  border-radius: 4px;
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    border: 1px solid #ccc;
  }
`;

export const NewAddressUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0px 0.5rem;
  cursor: pointer;
`;

export const ErrorName = styled.span`
  position: absolute;
  margin-top: 67px;
  margin-left: 10px;
  color: #f99b7d;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;
