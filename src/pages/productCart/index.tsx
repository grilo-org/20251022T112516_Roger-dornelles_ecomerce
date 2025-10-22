import { useContext, useState } from 'react';
import * as styled from './styled';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import { AddCartContext } from '../../context/addCartContext';
import { ProductProps } from '../../types/product';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../globalCss';

type ProductArrayProps = {
  item: {
    name: string;
    image: string;
    quantity: number;
    id: number;
    disabled?: boolean;
  };
};

const productCart = () => {
  const { addProductCart, setAddProductCart }: any = useContext(AddCartContext);

  const navigate = useNavigate();

  const [productList, setProductList] = useState<ProductProps[]>(addProductCart);
  const [quantityProduct, setQuantityProduct] = useState<any>([]);

  const handleButtonMinus = (item: ProductProps) => {
    let productInArray: Number = 0;
    productList.filter((itemArray) => {
      if (itemArray.id === item.id) {
        itemArray.quantity = item.quantity - 1;
        productInArray = itemArray.quantity;
        setQuantityProduct(itemArray.quantity);

        if (itemArray.quantity < 1) {
          if (itemArray.id === item.id) {
            setProductList(() => productList.filter((productArray) => productArray.id !== item.id));
            setAddProductCart(() =>
              addProductCart.filter((productArray: { id: number }) => productArray.id !== item.id)
            );
          }
        }

        if (itemArray.availableQuantity !== itemArray.quantity) {
          itemArray.disabled = false;
        }
      }

      if (Number(productInArray) < 1) {
        setAddProductCart((list: any[]) => list.filter((product) => product.id !== item.id));
      }
    });
  };

  const handleButtonPlus = (item: ProductProps) => {
    if (item) {
      productList.filter((product) => {
        if (product.id === item.id) {
          product.quantity += 1;
          setQuantityProduct(product.quantity);
          if (product.availableQuantity === product.quantity || product.disabled) {
            product.disabled = true;
          }
        }
      });
    }
  };

  const handleConfirmPurchase = () => {
    navigate('/pagamento');
  };

  return (
    <styled.Container>
      {productList.length !== 0 && <h2>Carrinho de compras.</h2>}
      {!productList.length && <h2>Opsss, Não há compras </h2>}

      <styled.ListContainer>
        <styled.UL>
          {productList &&
            productList.map((item) => {
              return (
                <styled.LI key={item.id}>
                  <styled.DescriptionContainer>
                    <styled.IMG src={item.image} alt={item.name} />
                    {item.name}
                  </styled.DescriptionContainer>

                  <styled.ButtonsContainer>
                    <styled.Buttons onClick={() => handleButtonMinus(item)}>
                      <b>
                        <BsDashLg />
                      </b>
                    </styled.Buttons>
                    <styled.Span>{item.quantity}</styled.Span>

                    <styled.Buttons onClick={() => handleButtonPlus(item)} disabled={item.disabled}>
                      <b>
                        <BsPlusLg />
                      </b>
                    </styled.Buttons>
                  </styled.ButtonsContainer>
                </styled.LI>
              );
            })}
        </styled.UL>
      </styled.ListContainer>

      {productList.length != 0 && <Button onClick={handleConfirmPurchase}>Finalizar pedido</Button>}
    </styled.Container>
  );
};
export default productCart;
