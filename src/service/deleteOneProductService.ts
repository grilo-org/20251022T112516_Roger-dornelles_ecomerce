import { axiosClient } from '../axios/config';

const deleteOneProductservice = async (id: number) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Produto invalido',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/product/${id}`,
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
        data: response.data.data,
      };
    }
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro,tente mais tarde',
      data: null,
    };
  }
};

export default deleteOneProductservice;
