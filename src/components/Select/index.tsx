import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  SetStateAction,
  useEffect,
} from 'react';
import * as styled from './styled';

type PropsInstallments = {
  value: string;
  parcel: string;
};

interface PropsSelect {
  getInstallmentValue: (value: string) => void;
  label: string;
  numberOfInstallments: PropsInstallments[];
}

const Select = ({ label, numberOfInstallments, getInstallmentValue }: PropsSelect) => {
  const [valueInstallment, setValueInstallment] = useState<SetStateAction<any>>();
  useEffect(() => {
    valueInstallment && getInstallmentValue(valueInstallment);
  }, [valueInstallment]);

  return (
    <styled.Container>
      <styled.Label>{label}</styled.Label>
      <styled.Selects onChange={(e) => setValueInstallment(e.target.value)}>
        <styled.Options>Selecionar parcela</styled.Options>
        {numberOfInstallments &&
          numberOfInstallments.map((item: PropsInstallments, index: number) => {
            return (
              <styled.Options key={index} value={item.parcel}>
                {item.parcel} X R$ {item.value}
              </styled.Options>
            );
          })}
      </styled.Selects>
    </styled.Container>
  );
};

export default Select;
