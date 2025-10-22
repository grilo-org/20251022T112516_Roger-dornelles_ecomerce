import Cookies from 'js-cookie';
import { axiosClient } from '../axios/config';
import jwt_decode from 'jwt-decode';
import { JwtPayloads } from '../context/userContext';

const JwtVerify = (token: string) => {
  try {
    let decoded: JwtPayloads = jwt_decode(token);

    let currentDate = new Date();
    let isValidToken: boolean = false;

    // JWT exp is in seconds

    if (decoded.exp * 1000 < currentDate.getTime()) {
      Cookies.remove('token');

      return {
        decoded: null,
        isValidToken: false,
      };
    } else {
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return {
        decoded: decoded,
        isValidToken: true,
      };
    }
  } catch (error) {
    Cookies.remove('token');
    return {
      decoded: null,
      isValidToken: false,
    };
  }
};
export default JwtVerify;
