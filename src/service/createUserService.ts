import { axiosClient } from '../axios/config';
import { UserType } from '../types/user';

const createUserService = async ({ name, cpf, email, password, logradouro, number, contact, state }: UserType) => {
  try {
    if (!name && !cpf && !email && !password && !logradouro && !number && !contact && !state) {
      return {
        error: true,
        message: 'Preencha todos os campos.',
        data: null,
      };
    }

    const response = await axiosClient({
      url: '/create/user',
      method: 'POST',
      data: {
        name,
        cpf,
        email,
        password,
        logradouro,
        number,
        contact,
        state,
      },
    });

    if (response.data.error) {
      return {
        error: true,
        message: response.data.message,
        data: null,
      };
    }

    return {
      error: false,
      message: null,
      data: response.data.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};

export default createUserService;
