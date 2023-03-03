import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  flex-grow: 2;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Text = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 14px;
  font-style: italic;
  font-weight: 700;

  border-top: 2px solid;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: #09139c;
  border-color: #2e1392;
  &:hover,
  &:focus {
    color: #d85b13;
    border-color: #d85b13;
  }
`;
