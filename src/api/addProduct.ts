import addProductService from '../service/addProductService';
import ErrorStatus401 from '../hooks/ErrorStatus401';
import { AddProductType } from '../types/product';

export default {
  newProduct: async ({ id, form }: AddProductType) => {
    try {
      let response = await addProductService({ id, form });

      if (response?.error) {
        return {
          error: true,
          message: response.message,
          data: 'api',
        };
      }

      if (!response?.error) {
        return {
          error: false,
          message: response?.message,
          data: response?.data,
        };
      }
    } catch (error) {
      ErrorStatus401(error);
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
