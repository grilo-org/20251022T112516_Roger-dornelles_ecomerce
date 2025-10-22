import deleteOneProductservice from '../service/deleteOneProductService';

export default {
  deleteOneProduct: async (id: number) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Produto invalido',
          data: null,
        };
      }

      const result = await deleteOneProductservice(id);

      if (result?.error) {
        return {
          error: true,
          message: result.message,
          data: null,
        };
      }

      if (!result?.error) {
        return {
          error: false,
          message: 'produto deletado com sucesso!',
          data: result?.data,
        };
      }
    } catch (error) {
      return {
        error: true,
        message: 'ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
