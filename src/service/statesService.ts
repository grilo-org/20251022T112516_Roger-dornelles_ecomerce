import { axiosClient } from '../axios/config';

const stateService = async () => {
  try {
    let states = await axiosClient({
      url: '/states/all',
      method: 'GET',
    });

    if (states.data.error) {
      return {
        error: true,
        message: states.data.message,
        data: null,
      };
    }

    return {
      error: false,
      message: null,
      data: states.data.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro , tente mais tarde',
      data: null,
    };
  }
};

export default stateService;
