import * as Styled from './styled';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { JwtPayloads, UserContext } from '../../context/userContext';
import { AddCartContext } from '../../context/addCartContext';
import Cookies from 'js-cookie';
import JwtVerify from '../../Jwt/index';
import { JwtPayload } from 'jsonwebtoken';
import { BsBasket3Fill, BsJustify, BsXLg } from 'react-icons/bs';

type Props = {
  children: ReactElement;
};

export const Header = ({ children }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const { addProductCart }: any = useContext(AddCartContext);
  const navigate = useNavigate();

  const [displayMenuMobile, setDisplayMenuMobile] = useState<boolean>(false);

  const token: string | undefined = Cookies.get('token');
  useEffect(() => {
    const jwt = () => {
      try {
        const decoded = JwtVerify(token as string) as JwtPayload | JwtPayloads;

        if (decoded.isValidToken) {
          Object(setUser)({
            id: decoded.decoded.id,
            email: decoded.decoded.email,
            token: decoded.isValidToken,
          });
          return;
        } else {
          Cookies.remove('token');
          Object(setUser)({
            id: 0,
            email: '',
            token: false,
          });
          return;
        }
      } catch (error) {
        Cookies.remove('token');
        Object(setUser)({
          id: 0,
          email: '',
          token: false,
        });
        return;
      }
    };

    jwt();
  }, [token]);

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
    window.location.reload();
  };

  const handlePageProducts = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <Styled.Header>
        <div>
          <img src={logo} alt="logomarca" />
          <strong>Ecommerce</strong>
        </div>

        <nav>
          <ul>
            <li onClick={handlePageProducts}>Produtos</li>

            {!user.token && (
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            )}

            {addProductCart.length > 0 && (
              <li>
                <Link to={`/carrinho`}>
                  <p>
                    <BsBasket3Fill />
                    <Styled.Span visible={addProductCart.length > 0}>{addProductCart.length}</Styled.Span>
                  </p>
                </Link>
              </li>
            )}

            {user.token && (
              <li>
                <Link to={'/profile'}>Perfil</Link>
              </li>
            )}

            {user.token && (
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            )}
          </ul>
        </nav>
      </Styled.Header>

      <Styled.HeaderMobile>
        <div>
          <img src={logo} alt="logomarca" />
          <strong>Ecommerce</strong>
        </div>
        <Styled.MenuMobile>
          <Styled.ContainerMenuMobile>
            {addProductCart.length > 0 && (
              <Link to={`/carrinho`}>
                <p>
                  <BsBasket3Fill />
                  <b>{addProductCart.length}</b>
                </p>
              </Link>
            )}

            <span
              onClick={() => {
                setDisplayMenuMobile(!displayMenuMobile);
              }}
            >
              <BsJustify />{' '}
            </span>
          </Styled.ContainerMenuMobile>

          <Styled.NavMobile displayMenuMobile={displayMenuMobile}>
            <p
              onClick={() => {
                setDisplayMenuMobile(!displayMenuMobile);
              }}
            >
              <BsXLg />
            </p>
            <ul>
              <li
                onClick={() => {
                  handlePageProducts();
                  setDisplayMenuMobile(!displayMenuMobile);
                }}
              >
                Produtos
              </li>

              {!user.token && (
                <li>
                  <Link
                    to={`/login`}
                    onClick={() => {
                      setDisplayMenuMobile(!displayMenuMobile);
                    }}
                  >
                    Login
                  </Link>
                </li>
              )}

              {user.token && (
                <li>
                  <Link
                    to={'/profile'}
                    onClick={() => {
                      setDisplayMenuMobile(!displayMenuMobile);
                    }}
                  >
                    Perfil
                  </Link>
                </li>
              )}

              {user.token && (
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
              )}
            </ul>
          </Styled.NavMobile>
        </Styled.MenuMobile>
      </Styled.HeaderMobile>

      {children}
    </>
  );
};
