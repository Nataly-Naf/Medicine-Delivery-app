import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/selectors';
import { removeAllFromCart } from 'redux/cartProductsSlice';
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart';
import { FormComponent } from 'components/FormComponent/Form';
import axios from 'axios';
import Notiflix from 'notiflix';

export default function CartPage() {
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();
  const [hasItemsInCart, setHasItemsInCart] = useState(cartProducts.length > 0);
  console.log(setHasItemsInCart);

  const handleSubmit = async (values, actions) => {
    const formData = values;

    const productsData = cartProducts.map(product => ({
      name: product.name,
      id: product._id,
      shopId: product.shopId,
      quantity: product.quantity,
    }));

    const orderData = {
      clientData: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      products: productsData,
    };
    try {
      await axios.post(
        'https://delivery-app-backend-nwp2.onrender.com/api/orders',
        orderData
      );
      Notiflix.Notify.success('Your order was added successfully');
      actions.resetForm();
      dispatch(removeAllFromCart());
    } catch (error) {
      Notiflix.Notify.failure(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
      <FormComponent
        handleSubmit={handleSubmit}
        hasItemsInCart={hasItemsInCart}
      />
      {cartProducts.length > 0 ? (
        <ShoppingCart />
      ) : (
        <p style={{ fontWeight: '600' }}>Your shoping cart is empty</p>
      )}
    </div>
  );
}
