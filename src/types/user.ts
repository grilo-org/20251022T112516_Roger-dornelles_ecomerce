export type UserType = {
  id?: number | string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  logradouro: string;
  number: string;
  contact: string;
  state: string;
  createdAt?: string;
  updatedAt?: string;
  district?: string;
};

export interface NewAddressType {
  name: string;
  contact: string;
  district: string;
  logradouro: string;
  number: string;
  phone: string;
  state: string;
}
