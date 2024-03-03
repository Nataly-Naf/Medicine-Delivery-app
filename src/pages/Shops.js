import React from 'react';
import { ShopsList } from 'components/ShopsList/ShopsList';

const styles = {
  display: 'flex',
  flexDirection: 'row',
};

export default function ShopsPage() {
  return (
    <>
      <h1>Shops</h1>
      <div style={styles}>
        <ShopsList />
      </div>
    </>
  );
}
