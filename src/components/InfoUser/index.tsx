import * as styled from './styled';
import { Error, Warning, Success } from '../../globalCss';
import { BsPencilSquare } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import apiState from '../../api/states';
import apiUpdateUser from '../../api/updateUser';
import apiUserInfo from '../../api/userInfo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/userContext';
import { UserType } from '../../types/user';
import { useMutation, useQuery } from 'react-query';

type DisabledType = {
  name?: boolean;
  email?: boolean;
  logradouro?: boolean;
  number?: boolean;
  password?: boolean;
  contact?: boolean;
  state?: boolean;
};

type UserDataType = {
  id?: number;
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
  logradouro?: string;
  number?: string;
  contact?: string;
  state?: string;
  createdAt?: string;
  updatedAt?: string;
};

type StatesType = {
  id: number;
  name: string;
};

interface ResponseApiType {
  error: boolean;
  message: string | null;
  data: UserType | null;
}

const UserInfo = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [error, setError] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const [createPassword, setCreatePassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [state, setState] = useState<StatesType[]>([]);
  const [stateUser, setStateUser] = useState<string>('');
  const [disabled, setDisabled] = useState<DisabledType>({
    name: true,
    email: true,
    logradouro: true,
    number: true,
    password: true,
    contact: true,
    state: true,
  });

  const [userData, setUserData] = useState<UserDataType>({
    id: 0,
    name: '',
    cpf: '',
    email: '',
    password: '',
    logradouro: '',
    number: '',
    contact: '',
    state: '',
    createdAt: '',
    updatedAt: '',
  });

  useQuery(`states`, () =>
    apiState
      .states()
      .then((response) => {
        if (response.error) {
          setError(response.message);
          setTimeout(() => {
            setError('');
          }, 2200);
        }

        !response.error && setState(response.data);
      })
      .catch(() => {
        setError('Ocorreu um erro, tente mais tarde');
        setTimeout(() => {
          navigate('/');
        }, 2200);
      })
  );

  const { refetch } = useQuery(`infoUser-${user.id}`, () =>
    apiUserInfo
      .infoAll(user.id)
      .then((response: ResponseApiType) => {
        if (response.error) {
          setError(response.message as string);
          setTimeout(() => {
            setError('');
          }, 2200);
          return;
        }

        if (!response.error) {
          setUserData({
            id: response?.data?.id as number,
            name: response?.data?.name,
            cpf: response?.data?.cpf,
            email: response?.data?.email,
            password: response?.data?.password,
            logradouro: response?.data?.logradouro,
            number: response?.data?.number,
            contact: response?.data?.contact,
            state: response?.data?.state,
            createdAt: response?.data?.createdAt,
            updatedAt: response?.data?.updatedAt,
          });
          return;
        }
      })
      .catch(() => {
        setError('Ocorreu um erro, tente mais tarde.');
        setTimeout(() => {
          navigate('/');
        }, 2200);
      })
  );

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (userData.name === '' && !userData.contact && userData.email && userData.number && userData.logradouro) {
      setError('Preencha todos os campos');
      setTimeout(() => {
        setError('');
      }, 2200);
      return;
    }

    if (userData.name && userData.name?.length < 2) {
      setWarning('Nome invalido');
      setTimeout(() => {
        setWarning('');
      }, 2200);
      return;
    }

    if (userData.email) {
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{3}/;
      const isEmailValid = regex.test(userData.email);

      if (!isEmailValid) {
        setWarning('Digite um email valido');
        setTimeout(() => {
          setWarning('');
        }, 2200);
        return;
      }
    }

    if (createPassword) {
      if (newPassword && confirmNewPassword !== '' && newPassword === confirmNewPassword) {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

        if (!regex.test(newPassword)) {
          setWarning(
            'Senha deve conter mais de 9 caracteres, deve conter letra maiúscula, minúscula e carácter especial'
          );
          setTimeout(() => {
            setWarning('');
          }, 2250);
          return;
        }
      } else {
        setWarning('Senhas são diferentes');
        setTimeout(() => {
          setWarning('');
        }, 2200);
        return;
      }
    }

    mutation.mutate({ id: user.id, userData });
  };

  const mutation = useMutation({
    mutationFn: ({ id, userData }: any) => apiUpdateUser.updateUser({ id, userData }).then((result) => result),
    onSuccess(data) {
      if (data.error) {
        setError(data.message);
        setTimeout(() => {
          setError('');
        }, 2200);
        return;
      }

      if (!data.error) {
        setSuccess(data.message);
        setDisabled({
          name: true,
          email: true,
          logradouro: true,
          number: true,
          password: true,
          contact: true,
          state: true,
        });

        setTimeout(() => {
          setSuccess('');
        }, 2200);
        refetch();
        return;
      }
    },
    onError(error) {
      setError('Ocorreu um erro, tente mais tarde.');
      setTimeout(() => {
        setError('');
      }, 2200);
      return;
    },
  });

  return (
    <styled.Container>
      <styled.Form onSubmit={handleSubmit}>
        {error && <Error>{error}</Error>}
        {warning && <Warning>{warning}</Warning>}
        {success && <Success>{success}</Success>}
        <h2>Dados do usuário</h2>
        <label>
          Nome:
          <div>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ name: e.target.value })}
              disabled={disabled.name}
            />
            <span
              onClick={() => {
                setDisabled({
                  name: !disabled.name,
                  email: true,
                  logradouro: true,
                  number: true,
                  password: true,
                  contact: true,
                  state: true,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <label>
          email:
          <div>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ email: e.target.value })}
              disabled={disabled.email}
            />
            <span
              onClick={() => {
                setDisabled({
                  name: true,
                  email: !disabled.email,
                  logradouro: true,
                  number: true,
                  password: true,
                  contact: true,
                  state: true,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <label>
          Contato:
          <div>
            <input
              type="text"
              value={userData.contact}
              onChange={(e) => setUserData({ contact: e.target.value })}
              disabled={disabled.contact}
            />
            <span
              onClick={() => {
                setDisabled({
                  name: true,
                  email: true,
                  logradouro: true,
                  number: true,
                  password: true,
                  contact: !disabled.contact,
                  state: true,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <label>
          endereço:
          <div>
            <input
              type="text"
              value={userData.logradouro}
              onChange={(e) => setUserData({ logradouro: e.target.value })}
              disabled={disabled.logradouro}
            />
            <span
              onClick={() => {
                setDisabled({
                  name: true,
                  email: true,
                  logradouro: !disabled.logradouro,
                  number: true,
                  password: true,
                  contact: true,
                  state: true,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <label>
          Numero:
          <div>
            <input
              type="text"
              value={userData.number}
              onChange={(e) => setUserData({ number: e.target.value })}
              disabled={disabled.number}
            />
            <span
              onClick={() => {
                setDisabled({
                  name: true,
                  email: true,
                  logradouro: true,
                  number: !disabled.number,
                  password: true,
                  contact: true,
                  state: true,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <label>
          Estado:
          <div>
            <select
              placeholder={userData.state}
              onChange={(e) => setStateUser(e.target.value)}
              disabled={disabled.state}
            >
              <option>{userData.state}</option>
              {state &&
                state.map((item: StatesType) => {
                  if (item.name !== userData.state) {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  }
                })}
            </select>
            <span
              onClick={() => {
                setDisabled({
                  name: true,
                  email: true,
                  logradouro: true,
                  number: true,
                  password: true,
                  contact: true,
                  state: !disabled.state,
                });
              }}
            >
              <BsPencilSquare />
            </span>
          </div>
        </label>

        <styled.NewPassword>
          <label>
            Cadastrar nova senha
            <input
              type="checkbox"
              onClick={() => {
                setCreatePassword(!createPassword);
                setNewPassword('');
                setConfirmNewPassword('');
              }}
            />
          </label>

          {createPassword && (
            <div>
              <label>
                Nova senha:
                <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </label>

              <label>
                Confirmar senha:
                <input type="text" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
              </label>
            </div>
          )}
        </styled.NewPassword>

        <styled.GroupButton>
          <Link to="/">Cancelar</Link>
          <button>Salvar</button>
        </styled.GroupButton>
      </styled.Form>
    </styled.Container>
  );
};

export default UserInfo;
