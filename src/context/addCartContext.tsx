import { ReactElement, ReactNode, createContext, useState } from 'react';

export type InitialValueProps = {
  name?: string;
  image?: string;
  quantity?: number;
  id?: number;
  availableQuantity?: number;
};

type Props = {
  children: ReactElement | ReactNode;
};

export type StateProps = {
  setAddProductCart: () => React.Dispatch<React.SetStateAction<InitialValueProps[]>>;
  addProductCart: () => React.Dispatch<React.SetStateAction<InitialValueProps[]>>;
};

const initialValue: InitialValueProps = {
  name: '',
  image: '',
  quantity: 0,
  id: 0,
  availableQuantity: 0,
};

export const AddCartContext = createContext(initialValue);

export const AddCartProvider = ({ children }: Props) => {
  const [addProductCart, setAddProductCart] = useState([]);

  return <AddCartContext.Provider value={{ addProductCart, setAddProductCart }}>{children}</AddCartContext.Provider>;
};
