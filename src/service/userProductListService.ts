import { axiosClient } from '../axios/config';

const userProductListService = async (id: number) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Usuário invalido',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/products/user/${id}`,
    });

    if (response.data.error) {
      return {
        error: true,
        message: response.data.error,
        data: null,
      };
    }

    if (!response.data.error) {
      return {
        error: false,
        message: null,
        data: response.data.data,
      };
    }
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};

export default userProductListService;
