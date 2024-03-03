import { ShopsListButton } from './ShopsItem.styled';

export const ShopItem = ({ name, id, onClick }) => {
  return (
    <ShopsListButton text={name} onClick={onClick}>
      {name}
    </ShopsListButton>
  );
};
