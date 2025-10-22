import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { PrivateRoute } from './helpers/authHandler';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import AddProduct from './components/AddProduct';
import DisplayOneProduct from './pages/DisplayOneProduct';
import ProductCart from './pages/productCart';
import ConfirmPurchase from './pages/confirmPurchase';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/carrinho" element={<ProductCart />} />
      <Route path="/produto/:id" element={<DisplayOneProduct />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route
        path="/adicionar/produto"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      />

      <Route
        path="/pagamento"
        element={
          <PrivateRoute>
            <ConfirmPurchase />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
