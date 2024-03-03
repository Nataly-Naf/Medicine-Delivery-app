import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/selectors';
import { changeQuantity, removeFromCart } from 'redux/cartProductsSlice';
import {
  CartProductsWrapper,
  CartProductsList,
  ProductImgWrapper,
  ProductImage,
  StyledItem,
  StyledButton,
  InfoWrapper,
} from './ShoppingCart.styled';
export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleQuantityChange = (quantity, productId) => {
    dispatch(changeQuantity({ quantity, productId }));
  };

  const handleRemoveFromCart = productId => {
    dispatch(removeFromCart(productId));
  };
  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <CartProductsWrapper>
      <CartProductsList>
        {cartProducts.map(product => (
          <StyledItem key={nanoid()}>
            <ProductImgWrapper>
              <ProductImage src={product.url} alt={product.name} />
            </ProductImgWrapper>
            <InfoWrapper>
              <h2>{product.name}</h2>
              <p>Price:${product.price}</p>
              <input
                type="number"
                value={product.quantity || 0}
                onChange={e =>
                  handleQuantityChange(e.target.value, product._id)
                }
              />

              <StyledButton onClick={() => handleRemoveFromCart(product._id)}>
                Remove
              </StyledButton>
            </InfoWrapper>
          </StyledItem>
        ))}
      </CartProductsList>
      <p>Total price: ${calculateTotal()}</p>
    </CartProductsWrapper>
  );
};
