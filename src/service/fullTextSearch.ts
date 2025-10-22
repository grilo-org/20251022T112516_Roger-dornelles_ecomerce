import { axiosClient } from '../axios/config';

const fullTexSearch = async (text: string) => {
  try {
    if (text) {
      const response = await axiosClient({
        url: `/fulltext/${text}`,
        method: 'GET',
      });

      if (response.data) {
        return {
          error: false,
          message: null,
          data: response.data,
        };
      }
    }
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};
export default fullTexSearch;
