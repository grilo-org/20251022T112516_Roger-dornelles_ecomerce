import { useContext, useRef, useState } from 'react';
import * as styled from './styled';
import { BsXLg } from 'react-icons/bs';
import { Error, Success, Warning } from '../../globalCss';
import { UserContext } from '../../context/userContext';
import addProduct from '../../api/addProduct';
import { useNavigate } from 'react-router-dom';

const quantityFiles = 10;
const AddProduct = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productValue, setProductValue] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');
  const [isInstallments, setIsInstallments] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [fileLimit, setFileLimit] = useState(false);

  const [error, setError] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleUploadFiles = (files: any[]) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f: any) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === quantityFiles) {
          setFileLimit(true);
        }
      }
      if (uploaded.length > quantityFiles) {
        setError(`Excedeu o limite de ${quantityFiles} imagens`);
        setFileLimit(false);
        limitExceeded = true;
        setTimeout(() => {
          setError('');
        }, 2200);
        return true;
      }
    });
    if (!limitExceeded) {
      setUploadedFiles(uploaded);
    }
  };

  const handleFiles = (e: { target: { files: any } }) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const MaskMoney = (value: string) => {
    console.log('value ', value);
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
    value = `${resultado}`;

    return value;
  };

  const handleConfirmPublish = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      if (!productName && !productDescription) {
        setWarning('Preencha os campos.');
        setTimeout(() => {
          setWarning('');
        }, 2200);
        return;
      }

      if (!productQuantity || !productValue) {
        setWarning('Preencha o campo Valor e/ou Quantidade');
        setTimeout(() => {
          setWarning('');
        }, 2200);
        return;
      }

      if (uploadedFiles.length === 0) {
        setWarning('Adicionar imagem do produto');
        setTimeout(() => {
          setWarning('');
        }, 2200);
        return;
      }

      if (productName) {
        let regex = /^[A-zÀ-ú '´]+$/;

        let isValid = productName.match(regex);
        if (!isValid) {
          setWarning('Nome do produto não deve conter caracteres especiais');
          setTimeout(() => {
            setWarning('');
          }, 2200);

          return;
        }
      }

      let form = new FormData();
      if (uploadedFiles.length > 0) {
        for (let i = 0; i < uploadedFiles.length; i++) {
          form.append('photos', uploadedFiles[i]);
        }
      }
      form.append('description', productDescription);
      form.append('name', productName);
      form.append('value', productValue as string);
      form.append('isInstallments', isInstallments);
      form.append('quantity', productQuantity);

      const response = await addProduct.newProduct({
        id: user.id,
        form,
      });

      if (response?.error) {
        setError(response?.message as string);

        setTimeout(() => {
          setError('');
        }, 2200);
      }

      if (!response?.error) {
        setSuccess(response?.message);
        setTimeout(() => {
          setSuccess('');
          window.location.reload();
        }, 2200);
      }
    } catch (error) {
      setError('Ocorreu um erro, tente mais tarde.');
      setTimeout(() => {
        setError('');
      }, 2200);
    }
  };
  return (
    <styled.Container>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      {warning && <Warning>{warning}</Warning>}
      <styled.form encType="multipart/form-data" onSubmit={handleConfirmPublish}>
        <h2>Anunciar um Produto</h2>
        <label>
          Produto
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>

        <label>
          Descrição
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            maxLength={250}
          />
          <span>{productDescription.length}/250</span>
        </label>

        <div>
          Quantidade
          <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
        </div>

        <div>
          Valor
          <input
            type="text"
            // pattern="[0-9]*"
            value={productValue}
            onChange={(e) => setProductValue(MaskMoney(e.target.value))}
          />
        </div>

        <div>
          Aceita proposta
          <select onChange={(e) => setIsInstallments(e.target.value)}>
            <option>Selecionar</option>
            <option value={'false'}>Não</option>
            <option value={'true'}>Sim</option>
          </select>
        </div>

        <styled.SelectFiles>
          <label>Selecionar imagem</label>
          <input type="file" multiple accept="image/jpeg, image/jpg, image/png" onChange={handleFiles} />
        </styled.SelectFiles>
        <div>
          {uploadedFiles.map((file: any, index: any) => (
            <p key={index}>
              {file.name}{' '}
              <span
                onClick={() => {
                  setUploadedFiles(uploadedFiles.filter((i: any) => i.name !== file.name));
                }}
              >
                <BsXLg />
              </span>
            </p>
          ))}
        </div>

        <styled.GroupButtons>
          <button
            type="reset"
            onClick={() => {
              navigate('/');
            }}
          >
            Cancelar
          </button>
          <button type="submit">Publicar</button>
        </styled.GroupButtons>
      </styled.form>
    </styled.Container>
  );
};

export default AddProduct;
