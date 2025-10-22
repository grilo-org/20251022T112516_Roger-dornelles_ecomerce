import { UpdateOneProductType } from '../types/product';
import { axiosClient } from '../axios/config';

const updateOneProductService = async ({
  id,
  name,
  description,
  value,
  isInstallments,
  quantity,
}: UpdateOneProductType) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Produto não encontrado',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/product/update/${id}`,
      method: 'PUT',
      data: { name, description, value, isInstallments, quantity },
    });
    console.log('error service ', response);
    if (response.data.error) {
      return {
        error: true,
        message: response.data.message,
        data: null,
      };
    }

    if (!response.data.error) {
      return {
        error: false,
        message: response.data.message,
        data: response.data.data,
      };
    }
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};

export default updateOneProductService;
