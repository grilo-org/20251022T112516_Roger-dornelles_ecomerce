import * as styled from './styled';
import { useState } from 'react';

import AsideProfile from '../../components/AsideProfile';
import InfoUser from '../../components/InfoUser';
import Purchases from '../../components/Purchases';
import AddProduct from '../../components/AddProduct';
import DeleteUser from '../../components/DeleteUser';
import UserProductList from '../../components/UserProductList';

const Profile = () => {
  const [typeNavigation, setTypeNavigation] = useState<string>('user');

  let isVisible: boolean = false;
  const handleNavigation = (type: string) => {
    setTypeNavigation(type);

    if (type === 'purchases') {
      isVisible = true;
    }
  };

  return (
    <styled.Container>
      <AsideProfile typeNavigation={handleNavigation} />

      {typeNavigation && typeNavigation === 'user' && <InfoUser />}
      {typeNavigation && typeNavigation === 'purchases' && <Purchases isVisible={isVisible} />}
      {typeNavigation && typeNavigation === 'addProduct' && <AddProduct />}
      {typeNavigation && typeNavigation === 'deleteUser' && <DeleteUser />}
      {typeNavigation && typeNavigation === 'productsUser' && <UserProductList />}
    </styled.Container>
  );
};

export default Profile;
