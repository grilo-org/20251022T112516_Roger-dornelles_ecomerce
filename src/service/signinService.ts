import { axiosClient } from '../axios/config';
import { SigninType } from '../types/login';

export const signinService = async ({ email, password }: SigninType) => {
  try {
    if (!email && !password) {
      return {
        error: true,
        message: 'Preencha todos os campos',
        data: null,
      };
    }

    let result = await axiosClient({
      url: '/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    if (result.data.error) {
      return {
        error: true,
        message: result.data.message,
        data: null,
      };
    }

    return {
      error: false,
      message: result.data.message,
      data: result.data.data,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.response.data.message,
      data: null,
    };
  }
};
