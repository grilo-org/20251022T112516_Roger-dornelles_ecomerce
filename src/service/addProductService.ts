import { axiosClient } from '../axios/config';
import ErrorStatus401 from '../hooks/ErrorStatus401';
import { AddProductType } from '../types/product';

const addProductService = async ({ id, form }: AddProductType) => {
  try {
    let response = await axiosClient.post(`/user/new/product/${id}`, form);

    if (response.data.error) {
      return {
        error: true,
        message: response.data.message,
        data: 'service',
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
    ErrorStatus401(error);
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};
export default addProductService;
