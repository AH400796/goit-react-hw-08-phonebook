import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  color: inherit; ;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 5px 5px 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: #8ed9fc;
  box-shadow: 2px 2px 5px #3d3d3d;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #170674;
`;

export const NumberLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  color: #170674;

  &:hover,
  &:focus {
    color: #d85b13;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #170674;
`;
export const ListItemButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  color: #170674;

  &:hover,
  &:focus {
    color: #d85b13;
  }
`;
