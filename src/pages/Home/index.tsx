import { useEffect, useState } from 'react';

import * as Styled from './styled';
import apiProduct from '../../api/home';

import { ProductType } from '../../types/product';
import { Link } from 'react-router-dom';
import { Error } from '../../globalCss';
import InputSearch from '../../components/InputSearch';
import { useQuery } from 'react-query';
export const Home = () => {
  const [productAll, setProductAll] = useState<ProductType[]>([]);

  const [error, setError] = useState<string>('');

  useQuery('productAll', () =>
    apiProduct.displayProductAll().then((result) => {
      if (result?.error) {
        setError(result.message);
        return;
      }

      !result?.error && setProductAll(result?.data);
    })
  );

  const handleUserSearch = (text: any) => {
    if (text.length) {
      setProductAll(text);
    }
  };

  return (
    <Styled.Container>
      <InputSearch handleUserSearch={handleUserSearch} />
      <Styled.Section>
        {error && <Error>{error}</Error>}
        {productAll &&
          productAll.map((product) => {
            return (
              <Styled.ProductAll key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img src={Object(product).photosID[0].link} alt={product.name} />
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>
                    Valor: <strong>{product.value}</strong>
                  </p>
                  <p>Quantidade disponível: {product.quantity}</p>
                  <span>Negociável: {product.isInstallments ? 'sim' : 'não'}</span>

                  <p>Publicado em {product.createdAt.substring(0, 10).split('-').reverse().join('/')}</p>
                </Link>
              </Styled.ProductAll>
            );
          })}
      </Styled.Section>
    </Styled.Container>
  );
};
