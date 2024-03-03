import styled from 'styled-components';

export const CartProductsWrapper = styled.div`
  width: 700px;
  height: 350px;
  overflow: scroll;
  border: 1px solid black;

  border: 1px solid black;
  background-color: white;
  margin-top: 25px;
  position: relative;
`;
export const StyledItem = styled.li`
  display: flex;
  gap: 20px;
`;

export const CartProductsList = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProductImgWrapper = styled.div`
  width: 80px;
  height: 120px;
  overflow: hidden;
  background-color: white;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const StyledButton = styled.button`
 width: 100px;
 display:inline-block;
  min-height: 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  padding: 5px;
  transition: all 0.3s ease;
  margin-top: 15px;

   &:hover {
    background-color: darkblue;`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TotalPrice = styled.p`
  font-weight: 600;
  position: absolute;
  bottom: 0;
  right: 30px;
`;
