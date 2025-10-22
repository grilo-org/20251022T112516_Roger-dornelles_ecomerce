import imageService from '../service/imagesService';

export default {
  imagesAll: async (image: any) => {
    try {
      if (!image) {
        return {
          error: true,
          message: 'ID da imagem invalido',
          data: null,
        };
      }

      const response = await imageService(image);

      if (response.error) {
        return {
          error: true,
          message: response.message,
          data: null,
        };
      }
      console.log('API ', response?.data?.data.data);
      !response.error && {
        error: false,
        message: null,
        data: response?.data?.data.data,
      };
    } catch (error) {
      return {
        erro: true,
        message: 'Ocorreu um erro, tente mais tarde.',
        data: null,
      };
    }
  },
};
