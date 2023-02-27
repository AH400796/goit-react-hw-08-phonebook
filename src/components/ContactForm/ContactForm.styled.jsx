import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddingForm = styled(Form)`
  display: flex;
  align-items: center;
  gap: 150px;
  width: 600px;
  margin-bottom: 30px;
  padding: 20px;

  background-color: #828bbd;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;

  &:first-child {
    margin-bottom: 30px;
  }
`;

export const Input = styled(Field)`
  max-width: 300px;
  outline: transparent;
  padding: 10px 10px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px 6px #3d3d3d;

  &::placeholder {
    font-size: 14px;
    color: #7a7a7a;
  }
`;
export const ErrWrapper = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  height: 50px;
  border: 1px solid #bfbacc;
  border-radius: 20px;
  padding: 10px 10px;
  background-color: #38c55c;
  cursor: pointer;
  box-shadow: 2px 2px 5px #3d3d3d;

  &:hover,
  &:focus {
    background-color: #0c6923;
    color: #ffffff;
  }

  &:disabled {
    background-color: #ffffff;
    color: #bdbdbd;
    font-weight: 500;
    cursor: auto;
  }
`;
