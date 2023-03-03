import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddingForm = styled(Form)`
  display: flex;
  align-items: flex-end;
  gap: 150px;
  width: 800px;
  margin-bottom: 30px;
  padding: 20px;
  font-weight: 500;

  color: #2e1392;
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
    font-size: 16px;
    color: #b6b3b3;
    padding-left: 10px;
  }
`;
export const ErrWrapper = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  height: 40px;
  color: #170674;
  border: 1px solid #8775f0;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: #72c0e4;
  cursor: pointer;
  box-shadow: 2px 2px 5px #3d3d3d;

  &:hover,
  &:focus {
    border-color: #170674;
    background-color: #170674;
    color: #ffffff;
  }

  &:disabled {
    background-color: #ffffff;
    color: #bdbdbd;
    font-weight: 500;
    cursor: auto;
  }
`;
