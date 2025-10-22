import { useContext, useState } from 'react';
import * as styled from './styled';
import { UserContext } from '../../context/userContext';
import { Error, Success } from '../../globalCss';
import apiDeleteUser from '../../api/deleteUser';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const DeleteUser = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleDeleteUser = async () => {
    try {
      const result = await apiDeleteUser.deleteUser(user.id);
      if (result?.error) {
        setError(result.message);
        setTimeout(() => {
          setError('');
        }, 2950);
      }

      if (!result?.error) {
        setSuccess('Conta excluída com sucesso');
        Cookies.remove('token');
        setTimeout(() => {
          setSuccess('');
          navigate('/');
        }, 2950);
      }
    } catch (error) {
      setError('Ocorreu um erro, tente mais tarde.');
      setTimeout(() => {
        setError('');
      }, 2950);
    }
  };

  return (
    <styled.Container>
      <styled.Info>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <styled.Paragraph>Você deseja excluir sua conta?</styled.Paragraph>
        <styled.Paragraph>
          Ao excluir sua conta não poderá ter mais acesso as informações de histórico de compras e anunciar um produto.
        </styled.Paragraph>

        <styled.Paragraph>Tem certeza que deseja excluir sua conta?</styled.Paragraph>
        <styled.Button onClick={handleDeleteUser}>Excluir Conta</styled.Button>
      </styled.Info>
    </styled.Container>
  );
};

export default DeleteUser;
