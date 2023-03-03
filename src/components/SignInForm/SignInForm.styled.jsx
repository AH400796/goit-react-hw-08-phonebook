import styled from 'styled-components';
import { Form, Field } from 'formik';

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 800px;
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
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  max-width: 300px;
  outline: transparent;
  padding: 10px 20px;
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

export const Wrapper = styled.label`
  display: flex;
  gap: 50px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  height: 50px;
  border: 2px solid #8775f0;
  border-radius: 20px;
  padding: 10px 10px;
  background-color: #72c0e4;
  color: #2e1392;
  cursor: pointer;
  box-shadow: 2px 2px 5px #3d3d3d;

  &:hover,
  &:focus {
    background-color: #170674;
    border-color: #170674;
    color: #ffffff;
  }

  &:disabled {
    background-color: #ffffff;
    color: #bdbdbd;
    font-weight: 500;
    cursor: auto;
  }
`;
