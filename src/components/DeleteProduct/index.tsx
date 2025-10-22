import { ProductType } from '../../types/product';
import * as S from './styled';
import { BsXLg } from 'react-icons/bs';

import apiDeleteProduct from '../../api/deleteOneProduct';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error, Success } from '../../globalCss';
import { useMutation, useQueries, useQuery } from 'react-query';

interface DeleteProductProps {
  deleteProduct: ProductType | undefined;
  handleCloseDeleteProduct: (value: boolean) => void;
  refetch: () => void;
}

const DeleteProduct = ({ deleteProduct, handleCloseDeleteProduct, refetch }: DeleteProductProps) => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const mutetion = useMutation('deleteProduct', (id) =>
    apiDeleteProduct
      .deleteOneProduct(Number(id))
      .then((result) => {
        if (result?.error) {
          setError(result.message);

          setTimeout(() => {
            setError('');
          }, 2000);
          return;
        }

        if (!result?.error) {
          setSuccess(result?.message);
          refetch();
          setTimeout(() => {
            setSuccess('');
            handleCloseDeleteProduct(true);
          }, 2000);
          return;
        }
      })
      .catch(() => {
        return;
      })
  );

  const handleDeleteProduct = async (id: number) => {
    try {
      if (id) {
        mutetion.mutate(id);
      }
    } catch (error) {
      if (error) {
        setError('Ocorreu um erro, tente mais tarde');

        setTimeout(() => {
          setError('');
        }, 2000);
        return;
      }
    }
  };
  return (
    <S.Container>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <S.AreaDescriptionProduct>
        <S.Close
          onClick={() => {
            handleCloseDeleteProduct(true);
          }}
        >
          <BsXLg />{' '}
        </S.Close>
        <S.Img src={`${Object(deleteProduct).photosID[0].link}`} />
        <S.Description>{deleteProduct?.name}</S.Description>
        <S.Description>{deleteProduct?.description}</S.Description>
        <S.Description>{deleteProduct?.value}</S.Description>
        <S.Description>{deleteProduct?.quantity}</S.Description>

        <S.AreaButton>
          Deseja excluir este produto?
          <S.Button onClick={() => handleDeleteProduct(deleteProduct?.id as number)}>Excluir</S.Button>
        </S.AreaButton>
      </S.AreaDescriptionProduct>
    </S.Container>
  );
};

export default DeleteProduct;
