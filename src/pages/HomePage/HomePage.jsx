import { Title } from './HomePage.styled';
import { showContactsList, addContactsForm } from 'redux/contactsFormSlice';
import { useDispatch } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();
  dispatch(showContactsList(false));
  dispatch(addContactsForm(false));
  return (
    <Title>An easy way to backup phone numbers of friends and colleagues</Title>
  );
}
