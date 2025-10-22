import { useState } from 'react';
import { ProductType, UpdateOneProductType } from '../../types/product';
import * as S from './styled';
import { BsXLg, BsPencilSquare } from 'react-icons/bs';
import { useMutation } from 'react-query';
import apiUpdate from '../../api/updateOneProduct';
import { Error, Success } from '../../globalCss';

interface UpdateOneProductProps {
  product: ProductType | undefined;
  closeUpdateProduct: (value: boolean) => void;
}

const UpdateOneProduct = ({ product, closeUpdateProduct }: UpdateOneProductProps) => {
  const [name, setName] = useState<string | undefined>(product?.name);
  const [description, setDescription] = useState<string | undefined>(product?.description);
  const [value, setValue] = useState<string | undefined>(product?.value);
  const [quantity, setQuantity] = useState<number | undefined>(product?.quantity);
  let [isInstallments, setIsInstallments] = useState<string | boolean>();

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const [errorQuantity, setErrorQuantity] = useState<string>('');

  const MaskMoney = (value: string) => {
    var valor = value.replace(/[^\d]+/gi, '');
    var resultado = '';
    var mascara = '';
    valor.length === 5 ? (mascara = '###,##') : (mascara = '###.###,##');
    for (var x = 0, y = 0; x < mascara.length && y < valor.length; ) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    value = `R$ ${resultado}`;

    return value;
  };

  const acceptOnlyNumbers = (value: string) => {
    const regex = new RegExp('^[0-9]+$');

    if (!value) {
      setErrorQuantity('Digite a quantidade de produto.');
      setQuantity(0);
      return;
    }

    const isAccept = regex.test(value);
    if (!isAccept) {
      setErrorQuantity('Digitar somente números');
      return;
    }
    setQuantity(Number(value));
    setErrorQuantity('');
  };

  const productUpdate = {
    id: product?.id,
    name,
    description,
    value,
    isInstallments,
    quantity,
  };

  const mutation = useMutation({
    mutationFn: ({ id, name, description, value, isInstallments, quantity }: UpdateOneProductType) => {
      apiUpdate
        .updateOneProduct({ id, name, description, value, isInstallments, quantity })
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

            setTimeout(() => {
              setSuccess('');
            }, 2000);
            return;
          }
        })
        .catch();
    },
  });

  const handleConfirmUpdateProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    mutation.mutate({ id: product.id, name, description, value, isInstallments, quantity });
  };

  return (
    <S.Container>
      <S.Close onClick={() => closeUpdateProduct(true)}>
        <BsXLg />
      </S.Close>
      <S.ContainerDescriptionProduct>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <S.Form onSubmit={handleConfirmUpdateProduct}>
          <S.Label>
            Produto:
            <S.Input value={name} onChange={(e) => setName(e.target.value)} />
          </S.Label>

          <S.Label>
            Descrição:
            <S.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={250}
              disabled={description != undefined && description.length > 250}
            />
            <b style={{ fontSize: '10px', color: '#868585' }}>{description?.length}/250</b>
          </S.Label>

          <S.Label>
            Valor:
            <S.InputValueOrQuantity
              value={value}
              onChange={(e) => {
                setValue(MaskMoney(e.target.value));
              }}
            />
          </S.Label>

          <S.Label>
            Quantidade:
            <S.InputValueOrQuantity
              value={quantity}
              onChange={(e) => {
                acceptOnlyNumbers(e.target.value);
              }}
              error={errorQuantity ? true : false}
            />
            {errorQuantity && <S.Error>{errorQuantity}</S.Error>}
          </S.Label>

          <S.Label>
            Aceita Propostas:
            <S.Select onChange={(e) => setIsInstallments(e.target.value)}>
              <S.OptionsSelect value={'false'}>Não</S.OptionsSelect>
              <S.OptionsSelect value={'true'}>Sim</S.OptionsSelect>
            </S.Select>
          </S.Label>
          <S.ButtonContainer>
            <S.Button>Confirmar</S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.ContainerDescriptionProduct>
    </S.Container>
  );
};
export default UpdateOneProduct;
