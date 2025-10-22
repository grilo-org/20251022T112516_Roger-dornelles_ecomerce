import createUserService from '../service/createUserService';
import { UserType } from '../types/user';

export default {
  createUser: async ({ name, cpf, email, password, logradouro, number, contact, state }: UserType) => {
    try {
      if (!name && !cpf && !email && !password && !logradouro && !number && !contact && !state ) {
        return {
          error: true,
          message: 'Preencha todos os campos.',
          data: null,
        };
      }

      const result = await createUserService({ name, cpf, email, password, logradouro, number, contact, state });
      if (result.error) {
        return {
          error: true,
          message: result.message,
          data: null,
        };
      }

      if (result.error) {
        return {
          error: true,
          message: result.message,
          data: null,
        };
      }

      return {
        error: false,
        message: null,
        data: result.data,
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
