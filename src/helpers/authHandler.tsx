import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { JwtPayload } from 'jwt-decode';
import JwtVerify from '../Jwt/index';

type Props = {
  children: JSX.Element;
};

export const isLogged = () => {
  let token = Cookies.get('token');

  const decoded: JwtPayload = JwtVerify(token as string);

  if (!decoded.isValidToken) {
    Cookies.remove('token');
    return;
  }
  return token ? true : false;
};

export const PrivateRoute = ({ children }: Props) => {
  const logged = isLogged();

  return logged ? children : <Navigate to="/login" />;
};
