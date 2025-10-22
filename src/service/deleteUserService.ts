import { axiosClient } from '../axios/config';

const deleteUserService = async (id: number) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Usuário não encontrado',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/user/${id}`,
      method: 'DELETE',
    });
    
    if (response.data.error) {
      return {
        error: true,
        message: response.data.message,
        data: null,
      };
    }
    if (!response.data.error) {
      return {
        error: false,
        message: response.data.message,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};

export default deleteUserService;
