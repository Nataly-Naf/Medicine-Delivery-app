import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layot';

const ShopsPage = lazy(() => import('../pages/Shops'));
const CartPage = lazy(() => import('../pages/ShoppingCart'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
