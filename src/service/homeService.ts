import { axiosClient } from '../axios/config';

const HomeService = async () => {
  try {
    const response = await axiosClient({
      url: '/products/all',
      method: 'GET',
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
      message: 'Ocorreu um erro,tente mais tarde',
      data: null,
    };
  }
};

export default HomeService;
