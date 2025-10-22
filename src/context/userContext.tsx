import { ReactElement, createContext, useEffect, useState } from 'react';

type Props = {
  children: ReactElement;
};

export interface JwtPayloads {
  id: number;
  email: string;
  exp: number;
  isValidToken: boolean;
  decoded: {
    decoded: { email: string; id: number };
  };
}

export type InitialState = {
  user: {
    token: string;
    email: string;
    id: number;
  };
  setUser: {
    token: string;
    email: string;
    id: number;
  };
};

export const initialState: InitialState = {
  user: {
    token: '',
    email: '',
    id: 0,
  },
  setUser: {
    token: '',
    email: '',
    id: 0,
  },
};

export const UserContext = createContext<InitialState>(initialState);

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<{ token: string; email: string; id: number }>({
    token: '',
    email: '',
    id: 0,
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
