import { Title, Wrapper, Image } from './HomePage.styled';
import { showContactsList, addContactsForm } from 'redux/contactsFormSlice';
import { useDispatch } from 'react-redux';
import contactsbook from '../../contactsbook.svg';

export default function HomePage() {
  const dispatch = useDispatch();
  dispatch(showContactsList(false));
  dispatch(addContactsForm(false));
  return (
    <Wrapper>
      <Title>
        An easy way to backup phone numbers of friends and colleagues
      </Title>
      <Image src={contactsbook} alt="contacts book" />
    </Wrapper>
  );
}
