import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { BsEnvelopeAtFill, BsKeyFill, BsX } from 'react-icons/bs';
import api from '../../api/signin';
import { UserContext } from '../../context/userContext';
import Cookies from 'js-cookie';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleConfirmSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!email || !password) {
        setWarning('Preencha os campos email e/ou senha.');
        setTimeout(() => {
          setWarning('');
        }, 1950);
      }

      let isEmailValid = regexEmail.test(email);

      !isEmailValid && setWarning('Digite um email valido.'),
        setTimeout(() => {
          setWarning('');
        }, 1950);

      if (isEmailValid) {
        setLoading(true);
        setDisabled(true);
        let response = await api.signin({ email, password });

        if (response.error) {
          setWarning(response.message);
          setTimeout(() => {
            setSuccess('');
            setDisabled(false);
            setLoading(false);
          }, 1950);
          return;
        }

        setSuccess(response.message);
        response.data && Cookies.set('token', response.data);

        setLoading(false);
        setTimeout(() => {
          setDisabled(false);
          setSuccess('');

          navigate('/');
        }, 1950);
      }
    } catch (error) {
      setWarning('Ocorreu erro, tente mais tarde.');
      setDisabled(false);
    }
  };

  return (
    <Styled.Container>
      <form onSubmit={handleConfirmSignin}>
        <h2>login</h2>
        {warning && <Styled.Warning>{warning}</Styled.Warning>}
        {success && <Styled.Success>{success}</Styled.Success>}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
          {email && email?.length > 2 && (
            <span onClick={() => setEmail('')}>
              <BsX />
            </span>
          )}
          <strong>
            <BsEnvelopeAtFill />
          </strong>
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
          {password && password.length > 2 && (
            <span onClick={() => setPassword('')}>
              <BsX />
            </span>
          )}
          <strong>
            <BsKeyFill />
          </strong>
        </label>
        <div>
          <Link to="/">Cancelar</Link>
          <button>{loading ? 'Aguarde' : 'Login'}</button>
        </div>
        <Styled.Cadastro>
          Você é novo?
          <Link to={'/cadastro'}>Criar cadastro</Link>
        </Styled.Cadastro>
      </form>
    </Styled.Container>
  );
};
