import { axiosClient } from '../axios/config';

const imageService = async (image: any) => {
  try {
    if (!image) {
      return {
        error: true,
        message: 'Imagem não encontrada',
        data: null,
      };
    }
    let imageAll = await axiosClient({
      url: `/image/all/${image}`,
      method: 'GET',
    });

    return {
      error: false,
      message: null,
      data: imageAll,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};

export default imageService;
