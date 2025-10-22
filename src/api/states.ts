import stateService from '../service/statesService';

export default {
  states: async () => {
    try {
      let statesAll = await stateService();

      if (statesAll.error) {
        return {
          error: true,
          message: statesAll.message,
          data: null,
        };
      }
      return {
        error: false,
        message: null,
        data: statesAll.data,
      };
    } catch (error) {
      return {
        error: true,
        message: 'Ocorreu um erro,tente mais tarde',
        data: null,
      };
    }
  },
};
