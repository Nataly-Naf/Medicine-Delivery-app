import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShopItem } from 'components/ShopItem/ShopsItem';
import { StyledShopsWrapper, StyledShopsList } from './ShopsList.styled';
import { DragList } from 'components/DragsList/DragList';
import { nanoid } from 'nanoid';

export const ShopsList = () => {
  const [shops, setShops] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);

  const fetchShops = async () => {
    try {
      const response = await axios.get(
        'https://delivery-app-backend-nwp2.onrender.com/api/shops'
      );
      setShops(response.data);
    } catch (error) {
      console.error('Downloading shops error', error);
    }
  };

  const handleButtonClick = async shopId => {
    try {
      const response = await axios.get(
        'https://delivery-app-backend-nwp2.onrender.com/api/products'
      );

      const products = response.data;
      const filteredProducts = products.filter(
        product => product.shopId === shopId
      );

      setShowProducts(filteredProducts);
      setSelectedShopId(shopId);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <>
      <StyledShopsWrapper>
        <StyledShopsList>
          {shops.map(shop => (
            <ShopItem
              key={nanoid()}
              name={shop.name}
              id={shop._id}
              onClick={() => handleButtonClick(shop._id)}
            />
          ))}
        </StyledShopsList>

        {selectedShopId && <DragList products={showProducts} />}
      </StyledShopsWrapper>
    </>
  );
};
