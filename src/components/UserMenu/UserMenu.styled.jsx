import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 800px;
  margin-bottom: 30px;
  padding: 20px 20px;
  gap: 20px;

  background-color: #828bbd;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  width: 150px;
  height: 50px;
  border: 1px solid #8775f0;
  color: #2e1392;
  border-radius: 20px;
  padding: 10px 15px 15px 15px;
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

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #170674;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #170674;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  background-color: #170674;
`;
