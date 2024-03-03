import React from 'react';
import { ShopsList } from 'components/ShopsList/ShopsList';

const styles = {
  display: 'flex',
  flexDirection: 'row',
};

export default function ShopsPage() {
  return (
    <>
      <div style={styles}>
        <ShopsList />
      </div>
    </>
  );
}
