import { useRef, useState } from 'react';
import * as styled from './styled';

interface Props {
  typeNavigation: (value: string) => void;
}

interface ItemsAsideProps {
  name: string;
  type: string;
  id: number;
}

const itemsAside = [
  { id: 1, name: 'Dados do usuário', type: 'user' },
  { id: 2, name: 'Histórico de Compras', type: 'purchases' },
  { id: 3, name: 'Anunciar um Produto', type: 'addProduct' },
  { id: 4, name: 'Produtos Anunciados', type: 'productsUser' },
  { id: 5, name: 'Excluir Conta', type: 'deleteUser' },
];

const AsideProfile = ({ typeNavigation }: Props) => {
  const [itemActive, setItemActive] = useState<number>(1);

  const handleGetType = (type: string) => {
    typeNavigation(type);
  };
  return (
    <styled.Container>
      <styled.Nav>
        <styled.UL>
          {itemsAside &&
            itemsAside.map((item: ItemsAsideProps) => {
              return (
                <styled.LI
                  key={item.id}
                  onClick={() => {
                    handleGetType(item.type);
                    setItemActive(item.id);
                  }}
                  active={item.id === itemActive}
                >
                  {item.name}
                </styled.LI>
              );
            })}
        </styled.UL>
      </styled.Nav>
    </styled.Container>
  );
};

export default AsideProfile;
