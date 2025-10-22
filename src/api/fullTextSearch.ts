import fullTexSearch from '../service/fullTextSearch';

export default {
  fullTextSearch: async (text: string) => {
    try {
      if (text.length >= 3) {
        const response = await fullTexSearch(text);
        if (response?.data) {
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
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
