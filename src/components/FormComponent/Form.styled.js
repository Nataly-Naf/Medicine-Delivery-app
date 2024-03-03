import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 400px;
  margin-left: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
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
  position: absolute;
  bottom:150px;
  right: 310px;
  

   &:hover {
    background-color: darkblue;`;
