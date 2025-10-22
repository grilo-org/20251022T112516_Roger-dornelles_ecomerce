import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import api from '../../api/states';
import apiCreate from '../../api/createUser';
import { Error, Warning, Success } from '../../globalCss';

import { StatesType } from '../../types/state';

export const Cadastro = () => {
  let [cpf, setCpf] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [states, setStates] = useState<StatesType[]>([]);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [userState, setUserState] = useState<string>('');

  const [warning, setWarning] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const navigate = useNavigate();

  const ValidateCPF = (cpf: string) => {
    const cpfIsValid = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
    if (!cpfIsValid.test(cpf)) {
      let formattedCpf = cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g, '$1.$2.$3-$4');
      return formattedCpf.toString();
    }
  };

  const ValidateName = (name: string) => {
    let regex = /^[A-zÀ-ú '´]+$/;

    let isValid = name.match(regex);
    if (isValid == null) {
      return false;
    } else {
      return true;
    }
  };

  // const ValidatePhone = (contact: string) => {
  //   var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
  //   return regex.test(contact);
  // };

  const phoneMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  const handleConfirmRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name || !cpf || !email || !contact || !password || !logradouro || !number || !userState) {
        setError('Preencha todos os campos');
        setTimeout(() => {
          setWarning('');
        }, 1950);
        return;
      }

      if (name) {
        let isNameValid = ValidateName(name);
        if (!isNameValid) {
          setWarning('Nome invalido.');
          setTimeout(() => {
            setWarning('');
          }, 1950);
          return;
        }
      }

      if (cpf) {
        const regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
        let isCpfValid = regex.test(cpf);

        if (!isCpfValid) {
          setWarning('Cpf invalido.');
          setTimeout(() => {
            setWarning('');
          }, 1950);
          return;
        }
      }

      if (email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = regex.test(email);
        if (!isEmailValid) {
          setWarning('Digite um email valido');
          setTimeout(() => {
            setWarning('');
          }, 1950);
          return;
        }
      }

      if (password) {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

        if (!regex.test(password)) {
          setWarning(
            'Senha deve ser maior de 9 caracteres, deve conter letra maiúscula, minúscula e carácter especial'
          );
          setTimeout(() => {
            setWarning('');
          }, 2250);
          return;
        }
      }

      const response = await apiCreate.createUser({
        name,
        cpf: cpf.replace('.', '').replace('-', ''),
        email,
        password,
        logradouro,
        number,
        contact,
        state: userState,

      });

      if (response.error) {
        setError(response.message);

        setTimeout(() => {
          setError('');
        }, 2200);
        return;
      }

      if (!response.error) {
        setSuccess('Cadastro efetuado com sucesso');

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      setError('Ocorreu um erro, tente mais tarde');
    }
  };

  useEffect(() => {
    const statesAll = async () => {
      try {
        let statesAll = await api.states();
        setStates(statesAll.data);
      } catch (error) {
        setError('Ocorreu um erro, tente mais tarde');
        setTimeout(() => {
          setWarning('');
        }, 1950);
      }
    };
    statesAll();
  }, []);

  return (
    <Styled.Container>
      {warning && <Warning>{warning}</Warning>}
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Styled.Form onSubmit={handleConfirmRegister}>
        <Styled.H2>Cadastro</Styled.H2>
        <label>
          Nome Completo:
          <input
            type="text"
            minLength={2}
            placeholder="Joys blindes"
            value={name}
            onChange={(e) => {
              ValidateName(e.target.value);
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Cpf:
          <input
            type="text"
            placeholder="11111111122"
            value={cpf}
            maxLength={14}
            onChange={(e) => {
              let validCpf = ValidateCPF(e.target.value);
              setCpf(validCpf as string);
            }}
          />
        </label>

        <label>
          Contato (celular):
          <input
            type="text"
            placeholder="55999999999"
            maxLength={15}
            value={contact}
            onChange={(e) => {
              let mask = phoneMask(e.target.value);
              setContact(mask);
            }}
          />
        </label>

        <label>
          email:
          <input type="email" placeholder="joys@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Senha:
          <input
            type="text"
            placeholder="Ex: Ea1234@"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <div>
          <label>
            Endereço:
            <input
              type="text"
              placeholder="rua / avenida feliz "
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </label>

          <label>
            Numero
            <input type="text" placeholder="50" value={number} onChange={(e) => setNumber(e.target.value)} />
          </label>
        </div>

        <label>
          Estado
          <select onChange={(e) => setUserState(e.target.value)}>
            <option value={''}> </option>
            {states &&
              states.map((state) => {
                return (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
          </select>
        </label>

        <Styled.GroupButtons>
          <Link to="/">Cancelar</Link>
          <button type="submit">Criar cadastro</button>
        </Styled.GroupButtons>
      </Styled.Form>
    </Styled.Container>
  );
};
