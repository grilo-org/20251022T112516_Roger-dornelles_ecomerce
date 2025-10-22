import { signinService } from '../service/signinService';
import { SigninType } from '../types/login';
export default {
  signin: async ({ email, password }: SigninType) => {
    try {
      if (!email || !password) {
        return {
          error: true,
          message: 'Preencha todos os campos',
          data: null,
        };
      }

      let response = await signinService({ email, password });

      if (response.error) {
        return {
          error: true,
          message: response.message,
          data: null,
        };
      }

      return {
        error: false,
        message: response?.message,
        data: response?.data,
      };
    } catch (error) {
      
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde.',
        data: null,
      };
    }
  },
};
