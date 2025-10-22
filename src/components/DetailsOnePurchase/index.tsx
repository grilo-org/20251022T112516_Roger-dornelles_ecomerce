import { useEffect, useState } from 'react';
import { DeliveryAddress, Purchase, UserProductDataOfPurchase } from '../../types/purchase';
import { BsXLg } from 'react-icons/bs';
import {
  Description,
  Close,
  Container,
  DescriptionContainer,
  H2,
  IMG,
  DescriptionPurchase,
  DescriptionTotalPurchase,
  Date,
  ContainerDescription,
  DescriptionRed,
  DescriptionGray,
  DescriptionPurchaseTitle,
  DescriptionQuantity,
} from './styled';

interface Props {
  openDetails: boolean;
  handleOpenContainerPurchase: (value: boolean) => void;
  dataPurchase?: Purchase[];
}

const detailsOnePurchase = ({ openDetails, handleOpenContainerPurchase, dataPurchase }: Props) => {
  const [openContainer, setOpenContainer] = useState<boolean>(false);

  useEffect(() => {
    openDetails ? setOpenContainer(true) : setOpenContainer(false);
  }, [openDetails]);
  const deliveryAddress = dataPurchase?.map((i) => i.deliveryAddress);
  const userProductDataOfPurchase = dataPurchase?.map((i) => i.userProductDataOfPurchase);

  return (
    <Container openDetails={openContainer}>
      <Close
        onClick={() => {
          setOpenContainer(false);
          handleOpenContainerPurchase(false);
        }}
      >
        <BsXLg />
      </Close>
      <DescriptionContainer>
        <H2>Endereço de entrega</H2>
        {deliveryAddress &&
          deliveryAddress[0].map((i: DeliveryAddress, index: number) => {
            return (
              <>
                <Description key={index}>Nome: {i.name}</Description>
                <Description>Contato: {i.phone}</Description>
                <Description>Rua: {i.logradouro}</Description>
                <Description>Bairro: {i.district}</Description>
                <Description>Estado: {i.state}</Description>
              </>
            );
          })}
      </DescriptionContainer>

      <DescriptionContainer>
        <H2>Descrição da compra</H2>
        <DescriptionPurchaseTitle>
          <Description>Produto</Description>
          <Description>Quantidade</Description>
          <Description>Valor unidade</Description>
        </DescriptionPurchaseTitle>

        {userProductDataOfPurchase &&
          userProductDataOfPurchase[0].map((item: UserProductDataOfPurchase, index: number) => {
            return (
              <>
                <DescriptionPurchase key={index}>
                  <IMG src={item.image} alt={item.name} />
                  <Description>{item.name}</Description>
                  <DescriptionQuantity>{item.quantity}</DescriptionQuantity>
                  <Description>{item.value}</Description>
                </DescriptionPurchase>
              </>
            );
          })}

        <DescriptionTotalPurchase>
          <H2>Forma de pagamento</H2>
          {dataPurchase && (
            <>
              <ContainerDescription>
                <DescriptionGray>Cartão </DescriptionGray>
                <Description>{dataPurchase[0].cardName}</Description>
              </ContainerDescription>

              <ContainerDescription>
                <DescriptionGray>Cartão final </DescriptionGray>
                <Description>{dataPurchase[0].lastNumbersOfCard}</Description>
              </ContainerDescription>

              <ContainerDescription>
                <DescriptionGray>Total da compra </DescriptionGray>
                <Description>{dataPurchase[0].total}</Description>
              </ContainerDescription>

              <ContainerDescription>
                <DescriptionGray>Parcelado em </DescriptionGray>
                <Description>{dataPurchase[0].numberParcelOfValue}</Description>
              </ContainerDescription>

              <Date>
                <DescriptionGray>Data da Compra: </DescriptionGray>
                <DescriptionRed>
                  {dataPurchase[0].createdAt.substring(0, 10).split('-').reverse().join('/')}
                </DescriptionRed>
              </Date>
            </>
          )}
        </DescriptionTotalPurchase>
      </DescriptionContainer>
    </Container>
  );
};

export default detailsOnePurchase;
