import { useState } from 'react';
import * as styled from './styled';

import Master from '../../assets/images/masterCard.png';
import Visa from '../../assets/images/visa.png';
import American_express from '../../assets/images/american_express.png';
import Elo from '../../assets/images/elo.png';

interface Props {
  handleTypeOfCard: (value: string) => void;
}

const TypeCard = ({ handleTypeOfCard }: Props) => {
  const handleCardDataDisplay = (card: string) => {
    if (card === 'american_express') {
      card = 'american express';
    }

    if (card === 'master_card') {
      card = 'master card';
    }
    handleTypeOfCard(card);
  };
  return (
    <styled.CardContainer>
      <styled.H2>Forma de Pagamento</styled.H2>

      <styled.Paragraph>Escolha a bandeira do cartão.</styled.Paragraph>
      <styled.ContainerCard>
        <styled.ContainerCardName>
          <styled.InputRadio
            name="card"
            value="master_card"
            onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
          />
          <styled.Img src={Master} alt="Cartão master" width={'60px'} />
        </styled.ContainerCardName>

        <styled.ContainerCardName>
          <styled.InputRadio
            name="card"
            value="visa"
            onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
          />
          <styled.Img src={Visa} alt="Cartão Visa" width={'60px'} />
        </styled.ContainerCardName>

        <styled.ContainerCardName>
          <styled.InputRadio
            name="card"
            value="elo"
            onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
          />
          <styled.Img src={Elo} alt="Cartão elo" width={'60px'} />
        </styled.ContainerCardName>

        <styled.ContainerCardName>
          <styled.InputRadio
            name="card"
            value="american_express"
            onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
          />
          <styled.Img src={American_express} alt="Cartão American express" width={'60px'} />
        </styled.ContainerCardName>
      </styled.ContainerCard>
    </styled.CardContainer>
  );
};

export default TypeCard;
