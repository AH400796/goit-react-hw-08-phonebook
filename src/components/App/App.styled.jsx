import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-left: 100px;

  font-size: 40px;
  color: #010101;
`;

export const Title = styled.h1`
  color: #2e1392;
  font-size: 36px;
  margin-bottom: 20px;
`;

export const ContactsWrapper = styled.div`
  width: 600px;
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
