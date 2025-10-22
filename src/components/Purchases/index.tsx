import { useContext, useState } from 'react';
import * as styled from './styled';
import { UserContext } from '../../context/userContext';
import apiPurchase from '../../api/purchases';
import { Error, Warning, Success } from '../../globalCss';
import { useQuery } from 'react-query';
import DetailsOnePurchase from '../DetailsOnePurchase';
import { Purchase } from '@/types/purchase';

const Purchases = (isVisible: boolean) => {
  const { user } = useContext(UserContext);

  const [dataPurchase, setDataPurchase] = useState<Purchase[]>();

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  let result;
  let isError;
  if (isVisible) {
    let { data, isError } = useQuery('purchases', () => apiPurchase.purchases(user.id));

    result = data;
    isError = isError;
  }

  let arrayPurchase: Purchase[] = [];
  for (let i = 0; i < result?.data.length; i++) {
    arrayPurchase.push(result?.data[i]);
  }
  let userProductDataOfPurchase = [];
  userProductDataOfPurchase.push(arrayPurchase.map((i) => i.userProductDataOfPurchase));

  const handleclickOnePurchase = (item: any) => {
    setOpenDetails(true);

    const array: Purchase[] = [];
    arrayPurchase.map((i) => {
      if (i.userProductDataOfPurchase === item) {
        array.push(i);
      }
    });

    setDataPurchase(array);
  };

  const handleOpenContainerPurchase = (value: boolean) => {
    setOpenDetails(value);
  };
  let uuid = self.crypto.randomUUID();
  let uuids = self.crypto.randomUUID() + 5;

  return (
    <styled.container>
      {isError && <Error>{result?.message}</Error>}

      <styled.ContainerPurchase openDetails={openDetails}>
        <styled.H2>Histórico de Compras</styled.H2>
        {userProductDataOfPurchase[0].length === 0 && <styled.NoPurchase>Não há registro de compras</styled.NoPurchase>}
        <styled.UL>
          <styled.LI>
            {userProductDataOfPurchase[0] &&
              userProductDataOfPurchase[0].map((item: any) => {
                return (
                  <>
                    {item.length <= 1 && (
                      <styled.Button onClick={() => handleclickOnePurchase(item)} key={uuid}>
                        <styled.Image src={item[0].image} alt={item[0].name} />
                        <styled.Paragraph>{item[0].name}</styled.Paragraph>
                        <styled.Paragraph>{item[0].value}</styled.Paragraph>
                      </styled.Button>
                    )}
                  </>
                );
              })}
          </styled.LI>
        </styled.UL>

        <styled.UL>
          <styled.LI>
            {userProductDataOfPurchase[0] &&
              userProductDataOfPurchase[0].map((item: any) => {
                return (
                  <>
                    {item.length >= 2 && (
                      <styled.Button onClick={() => handleclickOnePurchase(item)} key={uuids}>
                        <styled.GroupImages visible={item.length >= 2 ? true : false}>
                          {item.length >= 2 &&
                            item.map((newItem: { image: string; name: string; value: string }) => {
                              return (
                                <styled.Group>
                                  <styled.Image src={newItem.image} alt={newItem.name} />
                                  <styled.Paragraph>{newItem.name}</styled.Paragraph>
                                  <styled.Paragraph>{newItem.value}</styled.Paragraph>
                                </styled.Group>
                              );
                            })}
                        </styled.GroupImages>
                      </styled.Button>
                    )}
                  </>
                );
              })}
          </styled.LI>
        </styled.UL>
      </styled.ContainerPurchase>
      <DetailsOnePurchase
        openDetails={openDetails}
        handleOpenContainerPurchase={handleOpenContainerPurchase}
        dataPurchase={dataPurchase}
      />
    </styled.container>
  );
};

export default Purchases;
