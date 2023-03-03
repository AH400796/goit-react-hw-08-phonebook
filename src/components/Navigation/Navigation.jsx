import { Wrapper, Title, StyledLink, Text } from './Navigation.styled';
import { BsFillHouseFill } from 'react-icons/bs';

export default function Navigation() {
  return (
    <StyledLink to="/">
      <Wrapper>
        <Title>My Phonebook</Title>
        <Text>easy backup service</Text>
      </Wrapper>
      <BsFillHouseFill size={60} color={'inherit'} />
    </StyledLink>
  );
}
