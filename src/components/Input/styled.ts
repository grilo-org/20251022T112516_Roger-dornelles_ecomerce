import styled from 'styled-components';

export const ContainerInfoCard = styled.form`
  width: 100%;
  padding: 0.7rem 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
`;

interface PropsInput {
  width?: string;
  error?: boolean;
  disabled?: boolean;
}
export const Input = styled.input<PropsInput>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 0.4rem;
  outline: none;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  color: #7f8487;
  ${(props) => (props.disabled ? 'cursor:not-allowed;' : '')}

  &::placeholder {
    color: #cfd2cf;
  }

  &:focus {
    border: 1px solid #ccc;
    ${(props) => props.error && 'border:1px solid  #f99b7d'};
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;
