import { axiosClient } from '../axios/config';

const purchasesService = async (id: number) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Usuário invalido.',
        data: null,
      };
    }

    const result = await axiosClient({
      url: `/product/purchase/${id}`,
      method: 'GET',
    });

    if (result.data.error) {
      return {
        error: true,
        message: result.data.data.message,
        data: null,
      };
    }

    if (!result.data.error) {
      return {
        error: false,
        message: null,
        data: result.data.data,
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

export default purchasesService;
