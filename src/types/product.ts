export type ProductType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  isInstallments: true;
  quantity: number;
  updatedAt: string;
  userID: number;
  value: string;
  photosID: {
    id: number;
    link: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  };
  disabled?: boolean;
};

export type ProductProps = {
  name: string;
  image: string;
  quantity: number;
  id: number;
  availableQuantity?: number;
  disabled?: boolean;
  value: string;
};

export type AddProductType = {
  id: number;
  form: any;
};

export interface UpdateOneProductType {
  id: number;
  name: string;
  description: string;
  value: number | string;
  isInstallments: boolean | string | undefined;
  quantity: number | string;
}
