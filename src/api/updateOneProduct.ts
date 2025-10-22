import { UpdateOneProductType } from '../types/product';
import updateOneProductService from '../service/updateOneProductService';

export default {
  updateOneProduct: async ({ id, name, description, value, isInstallments, quantity }: UpdateOneProductType) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Produto não encontrado',
          data: null,
        };
      }

      if (!name && !description && !value && !isInstallments && !quantity) {
        return {
          error: true,
          message: 'Informações do produto inválidos',
          data: null,
        };
      }

      const response = await updateOneProductService({ id, name, description, value, isInstallments, quantity });
      
      if (response?.error) {
        return {
          error: true,
          message: response.message,
          data: null,
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
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde.',
        data: null,
      };
    }
  },
};
