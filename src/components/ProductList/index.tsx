import { useState } from 'react';
import * as S from './styled';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

import { Error } from '../../globalCss';
import { ProductType } from '../../types/product';

interface ProductListProps {
  productList: ProductType[];
  deleteProduct: (value: ProductType) => void;
  editProduct: (product: ProductType) => void;
  error: string;
}

const ProductList = ({ productList, editProduct, deleteProduct, error }: ProductListProps) => {
  const handleEditProduct = (product: ProductType) => {
    if (product) {
      editProduct(product);
    }
  };

  const handleClickDelete = (item: ProductType) => {
    if (item) {
      deleteProduct(item);
    }
  };

  return (
    <S.Container>
      <S.ProductList>
        {error && <Error>{error}</Error>}
        <S.Ul>
          {productList &&
            productList.map((item) => {
              return (
                <S.LI>
                  <S.IMG src={Object(item).photosID[0].link} />
                  <S.Description>{item.name}</S.Description>
                  <S.Description>{item.value}</S.Description>
                  <S.GroupButtons>
                    <S.Button onClick={() => handleEditProduct(item)} background={' #00ea7a'}>
                      <BsPencilSquare style={{ marginRight: '0.3rem' }} />
                      Editar
                    </S.Button>

                    <S.Button onClick={() => handleClickDelete(item)} background={'#ff4f4f'}>
                      <BsTrash style={{ marginRight: '0.3rem' }} />
                      Excluir
                    </S.Button>
                  </S.GroupButtons>
                </S.LI>
              );
            })}
        </S.Ul>
      </S.ProductList>
    </S.Container>
  );
};

export default ProductList;
