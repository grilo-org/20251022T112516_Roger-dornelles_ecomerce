import { axiosClient } from '../axios/config';
import ErrorStatus401 from '../hooks/ErrorStatus401';

const userInfoService = async (id: number) => {
  try {
    const response = await axiosClient({
      url: `/user/info/${id}`,
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
    ErrorStatus401(error);
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};
export default userInfoService;
