import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 470px;
  height: 450px;
  overflow: scroll;
  border: 1px solid black;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  padding: 10px;
`;
export const ProductImgWrapper = styled.div`
  width: 200px;
  height: 100px;
  overflow: hidden;
  background-color: grey;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductButton = styled.button`
  width: 100px;
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
    background-color: darkblue;
`;
