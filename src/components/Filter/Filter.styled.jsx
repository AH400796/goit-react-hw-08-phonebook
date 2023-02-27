import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  max-width: 300px;
  outline: transparent;
  padding: 5px 10px;

  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px 6px #3d3d3d;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Quantity = styled.span`
  font-weight: 600;
  font-size: 28px;
  margin-left: 20px;
`;
