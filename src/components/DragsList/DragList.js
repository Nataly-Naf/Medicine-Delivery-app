import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity } from 'redux/cartProductsSlice';
import { selectCartProducts } from 'redux/selectors';

import {
  ProductImage,
  ProductImgWrapper,
  ProductWrapper,
  ProductButton,
} from './DragList.styled';

export const DragList = ({ products }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleAddToCart = product => {
    const existingProduct = cartProducts.find(item => item._id === product._id);
    if (existingProduct) {
      dispatch(
        increaseQuantity({
          _id: existingProduct._id,
          quantity: existingProduct.quantity + 1,
        })
      );
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <ProductWrapper>
      {products &&
        products.map(product => (
          <div key={nanoid()}>
            <ProductImgWrapper>
              <ProductImage src={product.url} alt={product.name} />
            </ProductImgWrapper>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <ProductButton onClick={() => handleAddToCart(product)}>
              Add to cart
            </ProductButton>
          </div>
        ))}
    </ProductWrapper>
  );
};
