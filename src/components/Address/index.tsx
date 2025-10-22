import { useContext, useEffect, useState } from 'react';
import * as styled from './styled';
import { UserType, NewAddressType } from '../../types/user';
import { StatesType } from '../../types/state';
import { UserContext } from '../../context/userContext';
import { Button, Error, Success } from '../../globalCss';

import Input from '../Input';

import PhoneMask from '../../hooks/usePhoneMask';

import apiUserInfo from '../../api/userInfo';
import apiStates from '../../api/states';

interface PropsType {
  handleSelectNewAddress: (value: NewAddressType | any) => void;
}

const Address = ({ handleSelectNewAddress }: PropsType) => {
  const { user } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState<UserType>();
  const [states, setStates] = useState<StatesType[]>([]);
  const [selectAddress, setSelectAddress] = useState<{ user?: boolean; newAddress?: boolean } | null>(null);
  const [logradouro, setLogradouro] = useState<string>('');
  const [stateSelected, setStateSelected] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [complement, setComplement] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [error, setError] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');

  useEffect(() => {
    const userInfo = async () => {
      try {
        const id = user.id;

        const result = await apiUserInfo.infoAll(id);
        if (result.error) {
          setError(result.message);
          setTimeout(() => {
            setError('');
          }, 1950);
        }

        if (!result.error) {
          setUserInfo(result.data);
        }
      } catch (error) {
        setError('Ocorreu um erro, tente mais tarde');
        setTimeout(() => {
          setError('');
        }, 1950);
      }
    };
    userInfo();
    const statesAll = async () => {
      try {
        let statesAll = await apiStates.states();
        setStates(statesAll.data);
      } catch (error) {
        setError('Ocorreu um erro, tente mais tarde');
        setTimeout(() => {
          setError('');
        }, 1950);
      }
    };
    statesAll();

    const isCompletedForm = () => {
      if (name.length >= 2 && phone && numberAddress && complement && logradouro && stateSelected && district) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    isCompletedForm();
  }, [name, phone, numberAddress, complement, logradouro, stateSelected, district]);

  const ValidateName = (name: string) => {
    let regex = /^[A-zÀ-ú '´]+$/;

    let isValid = name.match(regex);
    if (isValid == null) {
      setErrorName('Nome deve conter somente letras');

      return false;
    } else {
      setErrorName('');
      return true;
    }
  };

  const handleSelectAddress = (value: string) => {
    if (value === 'userInfo') {
      setSelectAddress({ user: true });
      setErrorName('');
      setName('');
      setComplement('');
      setDistrict('');
      setStateSelected('');
      setPhone('');
      setLogradouro('');
      setNumberAddress('');

      const infoUserAddress = [];
      infoUserAddress.push({
        name: userInfo?.name,
        district: userInfo?.district,
        logradouro: userInfo?.logradouro,
        number: userInfo?.number,
        phone: userInfo?.contact,
        state: userInfo?.state,
      });

      handleSelectNewAddress(infoUserAddress);
    } else {
      setSelectAddress({ newAddress: true });
    }
  };

  const handleConfirmNewAddress = () => {
    const infoNewAddress = [];
    infoNewAddress.push({
      name: name,
      district: district,
      logradouro: logradouro,
      number: numberAddress,
      phone: phone,
      state: stateSelected,
    });

    handleSelectNewAddress(infoNewAddress);
  };

  return (
    <styled.Container>
      <styled.UserInfoContainer>
        {error && <Error>{error}</Error>}
        <styled.H2>Entrega</styled.H2>
        {userInfo && (
          <styled.InfoUser user={selectAddress?.user}>
            <styled.InputRadio name="user" value={'userInfo'} onChange={(e) => handleSelectAddress(e.target.value)} />
            <styled.UserInfoDescription>
              <styled.Paragraph> {userInfo.name}</styled.Paragraph>

              <styled.Paragraph>Cel: {userInfo.contact}</styled.Paragraph>
              <styled.Paragraph>
                {userInfo.logradouro},numero {userInfo.number}
              </styled.Paragraph>
              <styled.Paragraph>Bairro: {userInfo.district}</styled.Paragraph>
              <styled.Paragraph>{userInfo.state}</styled.Paragraph>
            </styled.UserInfoDescription>
          </styled.InfoUser>
        )}

        <styled.NewAddressUser>
          <styled.ParagraphNewAddress>
            <styled.InputRadio name="user" value={'newAddress'} onChange={(e) => handleSelectAddress(e.target.value)} />{' '}
            Novo endereço
          </styled.ParagraphNewAddress>
          <styled.InfoNewAddress newAddress={selectAddress?.newAddress} disabled={!selectAddress?.newAddress}>
            <styled.UserInfoDescription>
              <Input
                type="text"
                label="Nome completo"
                placeholder={'Nome completo'}
                pattern="[A-Za-z]"
                value={name}
                error={errorName ? true : false}
                onChange={(e) => {
                  setName(e.target.value);
                  ValidateName(e.target.value as string);
                }}
                disabled={!selectAddress?.newAddress}
              />
              {errorName && <styled.ErrorName>{errorName}</styled.ErrorName>}

              <Input
                type="text"
                label="Celular"
                placeholder={'Celular'}
                pattern="[0-9]"
                maxlength="15"
                value={phone}
                onChange={(e) => {
                  setPhone(PhoneMask(e.target.value as string));
                }}
                disabled={!selectAddress?.newAddress}
              />

              <Input
                type="text"
                label="Rua"
                placeholder={'Rua'}
                value={logradouro}
                onChange={(e) => {
                  setLogradouro(e.target.value);
                }}
                disabled={!selectAddress?.newAddress}
              />

              <Input
                type="text"
                label="Numero"
                placeholder={'numero'}
                value={numberAddress}
                onChange={(e) => {
                  setNumberAddress(e.target.value);
                }}
                disabled={!selectAddress?.newAddress}
              />
              <Input
                type="text"
                label="Bairro"
                placeholder={'Rua'}
                pattern="[A-Za-z]"
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
                disabled={!selectAddress?.newAddress}
              />

              <Input
                type="text"
                label="Complemento"
                placeholder={'complemento'}
                pattern="[A-Za-z]"
                value={complement}
                onChange={(e) => {
                  setComplement(e.target.value);
                }}
                disabled={!selectAddress?.newAddress}
              />
              <styled.Label>
                Estado:
                <styled.Select
                  onChange={(e) => {
                    setStateSelected(e.target.value);
                  }}
                  disabled={!selectAddress?.newAddress}
                >
                  <option value={''}> selecionar estado </option>
                  {states &&
                    states.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                </styled.Select>
              </styled.Label>
              <styled.ButtonContainer>
                <Button disabled={isDisabled} onClick={() => handleConfirmNewAddress()}>
                  Cadastrar
                </Button>
              </styled.ButtonContainer>
            </styled.UserInfoDescription>
          </styled.InfoNewAddress>
        </styled.NewAddressUser>
      </styled.UserInfoContainer>
    </styled.Container>
  );
};

export default Address;
