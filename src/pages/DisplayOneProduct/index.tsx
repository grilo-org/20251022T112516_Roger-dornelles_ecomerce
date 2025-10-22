import { useParams } from 'react-router-dom';
import * as styled from './styled';
import { useEffect, useState, useContext } from 'react';
import apiOneProduct from '../../api/displayOneProduct';
import { Error, Button } from '../../globalCss';
import { Pagination } from '../../components/Pagination';
import { ProductType } from '../../types/product';
import { AddCartContext } from '../../context/addCartContext';

type ProductArrayProps = {
  name: string;
  image: string;
  quantity: number;
  id: number;
  availableQuantity: number;
  disabled: boolean;
  value: string;
};

type ProductImageProps = {
  id: number;
  link: string;
};

const displayOneProduct = () => {
  const { id } = useParams();
  const { addProductCart, setAddProductCart }: any = useContext(AddCartContext);

  const [product, setProduct] = useState<ProductType>();
  const [productImage, setProductImage] = useState<ProductImageProps[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const [itemsPerPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const displayProduct = async () => {
      try {
        const result = await apiOneProduct.displayOneProduct(id as string);

        if (result?.error) {
          setError(result.message);
        }

        if (!result?.error) {
          setProduct(result?.data.product);
          setProductImage(result?.data.images);
        }
      } catch (error) {
        return;
      }
    };
    displayProduct();

    addProductCart &&
      addProductCart.filter((productArray: { id: number; disabled: boolean }) => {
        if (productArray.id === Number(id)) {
          setDisabled(productArray.disabled);
        }
      });
  }, []);

  const pages = productImage && Math.ceil(productImage.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productImage && productImage.slice(startIndex, endIndex);

  const handlePagination = (value: number) => {
    setCurrentPage(value);
  };

  const handleAddProductCart = (product: ProductType) => {
    let productArray: ProductArrayProps[] = [...addProductCart];

    let productExistsInArray = productArray.find((item) => item.name === product.name);

    if (!productExistsInArray) {
      productArray.push({
        id: product.id,
        name: product.name,
        image: productImage[0].link,
        quantity: 1,
        availableQuantity: product.quantity,
        disabled: false,
        value: product.value,
      });

      productArray.map((itemArray) => {
        if (itemArray.quantity >= itemArray.availableQuantity) {
          itemArray.disabled = true;
        }

        productArray.filter((productArray) => {
          if (productArray.id === product.id) {
            setDisabled(productArray.disabled);
          }
        });
      });
    } else {
      addProductCart.filter((item: { id: number; quantity: number; disabled: boolean; availableQuantity: number }) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + 1;
          item.disabled = item.quantity >= item.availableQuantity;
        }
      });
    }

    productArray.filter((productArray) => {
      if (productArray.id === product.id) {
        setDisabled(productArray.disabled);
      }
    });

    setAddProductCart(productArray);
  };

  return (
    <styled.Container>
      {error && <Error>{error}</Error>}

      <styled.ImageContainer>
        {currentItems &&
          currentItems.map((item: { link: string; id: number }) => {
            return <styled.Image key={item.id} src={item.link} alt="imagem do produto" />;
          })}

        {!error && pages > 1 && (
          <Pagination currentPage={currentPage} handlePagination={handlePagination} pages={pages} />
        )}
      </styled.ImageContainer>

      {product && (
        <styled.ProductContainer>
          {disabled && <styled.Span>Não há mais Produto disponível</styled.Span>}
          <styled.Product>
            <styled.ProductName bold="bold">{product.name}</styled.ProductName>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>{product.description}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription size="25px">{product.value}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>
              Disponível {product.quantity} unidade{product.quantity > 1 ? 's' : ''}
            </styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>{product.isInstallments ? 'Produto negociável' : ''}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>
              Publicado em {product.createdAt.substring(0, 10).split('-').reverse().join('/')}
            </styled.ProductDescription>
          </styled.Product>

          <styled.ButtonContainer>
            <Button disabled={disabled} onClick={() => handleAddProductCart(product)}>
              Comprar
            </Button>
          </styled.ButtonContainer>
        </styled.ProductContainer>
      )}
    </styled.Container>
  );
};

export default displayOneProduct;
