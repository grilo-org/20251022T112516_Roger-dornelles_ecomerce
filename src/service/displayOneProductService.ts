import { axiosClient } from '../axios/config';

const displayOneProductService = async (id: string) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Produto não encontrado',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/product/${id}`,
      method: 'GET',
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
      message: 'Ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};

export default displayOneProductService;
