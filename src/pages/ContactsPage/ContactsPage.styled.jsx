import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 24px;

  border-radius: 20px;
  background-color: #72c0e4;
  color: #2e1392;
  box-shadow: 2px 2px 5px #3d3d3d;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  min-height: 160px;
  padding: 20px;
  background-color: #828bbd;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;
`;
