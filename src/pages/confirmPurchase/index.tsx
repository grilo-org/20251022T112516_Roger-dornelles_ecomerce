import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styled';
import { Button, Error, Success, Warning } from '../../globalCss';

import { AddCartContext } from '../../context/addCartContext';
import { UserContext } from '../../context/userContext';

import { ProductProps } from '../../types/product';
import { NewAddressType } from '../../types/user';

import apiInstallment from '../../api/installmentsList';
import apiMakeThePaymentService from '../../api/makeThePayment';
import apiStates from '../../api/states';

import Master from '../../assets/images/masterCard.png';
import Visa from '../../assets/images/visa.png';
import American_express from '../../assets/images/american_express.png';
import Elo from '../../assets/images/elo.png';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TypeCard from '../../components/TypeCard';
import Address from '../../components/Address';

import PhoneMask from '../../hooks/usePhoneMask';
import CardMask from '../../hooks/useCardMask';
import FormattedDate from '../../hooks/useFormattedDate';

interface UserProductDataOfPurchaseType {
  name: string;
  image: string;
  quantity: string | number;
  value: string;
}

const confirmPurchase = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const { addProductCart, setAddProductCart }: any = useContext(AddCartContext);
  const [products] = useState<ProductProps[]>(addProductCart);
  const [cardName, setCardName] = useState<string>('');
  const [behindTheCard, setBehindTheCard] = useState<boolean>(false);

  const [errorName, setErrorName] = useState<string>('');
  const [disabledButtonPayment, setDisabledButtonPayment] = useState<boolean>(true);

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [warning, setWarning] = useState<string>('');

  const [addressUser, setAddressUser] = useState<NewAddressType>();

  const [numberCard, setNumberCard] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [codeSecurity, setCodeSecurity] = useState<string>('');
  const [numberOfInstallments, setNumberOfInstallments] = useState([]);
  const [numberOfParcelsAndValue, setNumberOfParcelsAndValue] = useState<{ parcel: string; value: string }>({
    value: '',
    parcel: '',
  });

  const maxLengthSecurityCode = cardName === 'american express' ? '4' : '3';
  const placeHolder = cardName === 'american express' ? '0000 111111 22222' : '000 1111 2222 3333';

  useEffect(() => {
    const installmentsList = async () => {
      const result = await apiInstallment.installmentList(currencyFormatted as string);
      if (result.data) {
        setNumberOfInstallments(result.data);
      }
    };
    installmentsList();
  }, [cardName]);

  const imageCard = [];
  imageCard.push({ name: 'master card', url: Master });
  imageCard.push({ name: 'elo', url: Elo });
  imageCard.push({ name: 'visa', url: Visa });
  imageCard.push({ name: 'american express', url: American_express });

  let currencyFormatted = '';
  let total = 0;
  for (let i = 0; i < addProductCart.length; i++) {
    total += Number(
      addProductCart[i].value
        .substring(2, addProductCart[i].value.length - 2)
        .replace(',', '')
        .replace('.', '') * addProductCart[i].quantity
    );

    currencyFormatted = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  const handleSelectAddress = (value: NewAddressType) => {
    setAddressUser(value);
  };

  const handleCardDataDisplay = (card: string) => {
    setCardName(card);
  };

  const handleBehindTheCard = () => {
    setBehindTheCard(true);
  };

  const handleFrontOfCard = () => {
    setBehindTheCard(false);
  };

  const ValidateName = (name: string) => {
    let regex = /^[A-zÀ-ú '´]+$/;

    let isValid = name.match(regex);
    if (isValid == null) {
      setErrorName('Nome deve conter somente letras');

      return false;
    } else {
      setErrorName('');
      return true;
    }
  };

  const validatedSecurityCode = (code: string) => {
    code = code.replace(/\D/g, '');
    return code;
  };

  useEffect(() => {
    if (
      name.length >= 2 &&
      address &&
      numberAddress &&
      numberCard &&
      complement &&
      dueDate &&
      phone &&
      numberOfParcelsAndValue
    ) {
      if (codeSecurity.length >= 3) {
        setDisabledButtonPayment(false);
      } else {
        setDisabledButtonPayment(true);
      }
    } else {
      setDisabledButtonPayment(true);
    }
  }, [codeSecurity, name, address, numberAddress, numberCard, complement, dueDate, phone, numberOfParcelsAndValue]);

  const getInstallmentValue = (value: string) => {
    numberOfInstallments.filter((itemArray: { parcel: string; value: string }) => {
      if (itemArray.parcel == value) {
        setNumberOfParcelsAndValue({ value: itemArray.value, parcel: itemArray.parcel });
        return;
      }
    });
  };

  let userProductDataOfPurchase: UserProductDataOfPurchaseType[] = [];

  for (let i in products) {
    userProductDataOfPurchase.push({
      name: products[i].name,
      image: products[i].image,
      quantity: products[i].quantity,
      value: products[i].value,
    });
  }

  const handleConfirmPayment = async () => {
    try {
      if (
        !name ||
        !cardName ||
        !numberAddress ||
        !numberCard ||
        !complement ||
        !codeSecurity ||
        !dueDate ||
        !phone ||
        !address ||
        !numberOfInstallments
      ) {
        setError('Preencha todos os campos');
        setTimeout(() => {
          setError('');
        }, 1950);
        return;
      }

      if (!addressUser) {
        setWarning('Selecione o endereço de entrega.');
        setTimeout(() => {
          setWarning('');
        }, 1950);
        return;
      }

      let result = await apiMakeThePaymentService.makeThePayment({
        id: user?.id,
        name,
        phone,
        address,
        numberAddress,
        complement,
        dueDate,
        total: currencyFormatted,
        userID: user.id,
        numberParcelOfValue: `${numberOfParcelsAndValue.parcel} X R$ ${numberOfParcelsAndValue.value}`,
        numberOfCard: numberCard,
        securityCode: codeSecurity,
        cardName,
        userProductDataOfPurchase,
        deliveryAddress: addressUser,
      });

      if (result?.error) {
        setError(result.message);
        setTimeout(() => {
          setError('');
        }, 1950);
      }
      if (!result?.error) {
        setSuccess(result?.message);
        setTimeout(() => {
          setSuccess('');
          setAddProductCart([]);
          navigate('/profile');
        }, 1950);
      }
    } catch (error) {
      setError('Ocorreu um erro, tente mais tarde');
      setTimeout(() => {
        setError('');
      }, 1950);
    }
  };

  return (
    <styled.Container>
      <styled.ContainerDivision>
        <styled.DivisionOne>
          <styled.H2>Pedido</styled.H2>
          {!products.length && <styled.H2>Opss, Não há compras</styled.H2>}
          <styled.UL>
            {products &&
              products.map((product: ProductProps) => {
                return (
                  <styled.LI key={product.id}>
                    <styled.Img src={product.image} alt={product.name} />
                    <styled.Span>{product.name}</styled.Span>
                    <styled.Span>Quantidade: {product.quantity}</styled.Span>

                    <styled.Span>{product.value}</styled.Span>
                  </styled.LI>
                );
              })}
          </styled.UL>

          <styled.TotalContainer>
            <styled.Span>Total: {currencyFormatted ? currencyFormatted : 'R$ 0,00'}</styled.Span>
          </styled.TotalContainer>

          <Address handleSelectNewAddress={handleSelectAddress} />
        </styled.DivisionOne>

        <styled.DivisionTwo>
          <TypeCard handleTypeOfCard={handleCardDataDisplay} />

          <Card
            isVisible={cardName ? true : false}
            imageCard={imageCard}
            cardName={cardName}
            numberCard={numberCard}
            dueDate={dueDate}
            name={name}
            codeSecurity={codeSecurity}
            behindTheCard={behindTheCard}
            frontOfCard={!behindTheCard}
          />

          <styled.ContainerInfoCard isVisible={cardName}>
            {error && <Error>{error}</Error>}
            {success && <Success>{success}</Success>}
            {warning && <Warning>{warning}</Warning>}
            <Select
              label="Numero de parcelas"
              numberOfInstallments={numberOfInstallments}
              getInstallmentValue={getInstallmentValue}
            />
            <Input
              type="text"
              label="Numero do cartão"
              placeholder={placeHolder}
              pattern="[0-9]"
              value={numberCard}
              onChange={(e) => setNumberCard(CardMask(e.target.value as string, cardName))}
              onClick={handleFrontOfCard}
            />
            <Input
              type="text"
              label="Data vencimento"
              placeholder="10/29"
              value={dueDate}
              maxlength="5"
              onChange={(e) => setDueDate(FormattedDate(e.target.value as string))}
              width={'120px'}
              onClick={handleFrontOfCard}
            />
            <Input
              type="text"
              error={errorName ? true : false}
              label="Nome completo"
              placeholder="John deere"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                ValidateName(e.target.value as string);
              }}
              onClick={handleFrontOfCard}
            />
            {errorName && <styled.Error>{errorName}</styled.Error>}
            <Input
              type="tel"
              label="Celular"
              placeholder="(00) 9 9999-9999"
              maxlength="15"
              value={phone}
              onChange={(e) => setPhone(PhoneMask(e.target.value as string))}
              width={'300px'}
              onClick={handleFrontOfCard}
            />
            <styled.ContainerLogradouro>
              <Input
                type="text"
                label="Endereço"
                placeholder="Rua abc"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                width={'500px'}
                onClick={handleFrontOfCard}
              />
              <Input
                type="text"
                label="Numero"
                placeholder="100"
                value={numberAddress}
                onChange={(e) => setNumberAddress(e.target.value)}
                width="110px"
                onClick={handleFrontOfCard}
              />
            </styled.ContainerLogradouro>
            <Input
              type="text"
              label="Complemento"
              placeholder="apartamento 1101"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              onClick={handleFrontOfCard}
            />

            <Input
              type="text"
              label={'código de segurança'}
              placeholder={cardName === 'american express' ? '0001' : '001'}
              pattern="[0-9]"
              maxlength={maxLengthSecurityCode}
              value={codeSecurity}
              onChange={(e) => setCodeSecurity(validatedSecurityCode(e.target.value as string))}
              width="30%"
              onClick={handleBehindTheCard}
            />

            <div>
              <Button disabled={disabledButtonPayment} width={'80%'} onClick={handleConfirmPayment}>
                Confirmar pagamento
              </Button>
            </div>
          </styled.ContainerInfoCard>
        </styled.DivisionTwo>
      </styled.ContainerDivision>
    </styled.Container>
  );
};

export default confirmPurchase;
