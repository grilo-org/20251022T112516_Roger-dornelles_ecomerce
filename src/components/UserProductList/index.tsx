import { useQuery } from 'react-query';
import * as S from './styled';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import apiProductList from '../../api/userProductList';
import { ProductType } from '../../types/product';
import { Error } from '../../globalCss';
import ProductList from '../ProductList';
import UpdateOneProduct from '../updateOneProduct';
import DeleteProduct from '../DeleteProduct';

const UserProductList = () => {
  const { user } = useContext(UserContext);

  const [productList, setProductList] = useState<ProductType[]>([]);
  const [editUserProduct, setEditUserProduct] = useState<ProductType>();
  const [deleteOneProduct, setDeleteOneProduct] = useState<ProductType>();
  const [typeComponent, setTypeComponent] = useState<string>('productList');

  const [error, setError] = useState<string>('');
  const { refetch } = useQuery('userProductList', () =>
    apiProductList
      .productList(user.id)
      .then((result) => {
        if (result?.error) {
          setError(result.message);
          setTimeout(() => {
            setError('');
          }, 2950);
          return;
        }

        if (!result?.error) {
          setProductList(result?.data);
          return;
        }
      })
      .catch(() => {
        setError('Ocorreu um erro,tente mais tarde');
        setTimeout(() => {
          setError('');
        }, 2950);
      })
  );

  const editProduct = (item: ProductType) => {
    if (item) {
      setTypeComponent('updateProduct');
      setEditUserProduct(item);
    }
  };

  const closeUpdateProduct = (value: boolean) => {
    if (value) {
      setTypeComponent('productList');
    }
  };

  const deleteProduct = (item: ProductType) => {
    if (item) {
      setTypeComponent('deleteProduct');
      setDeleteOneProduct(item);
    }
  };

  const handleCloseDeleteProduct = (value: boolean) => {
    if (value) {
      setTypeComponent('productList');
    }
  };

  return (
    <S.Container>
      {typeComponent === 'productList' && (
        <ProductList productList={productList} editProduct={editProduct} deleteProduct={deleteProduct} error={error} />
      )}
      {typeComponent === 'updateProduct' && (
        <UpdateOneProduct product={editUserProduct} closeUpdateProduct={closeUpdateProduct} />
      )}

      {typeComponent === 'deleteProduct' && (
        <DeleteProduct deleteProduct={deleteOneProduct} handleCloseDeleteProduct={handleCloseDeleteProduct} refetch={refetch} />
      )}
    </S.Container>
  );
};

export default UserProductList;
