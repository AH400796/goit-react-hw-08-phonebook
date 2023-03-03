import { Title } from './HomePage.styled';
import { showContactsList } from 'redux/contactsFormSlice';
import { useDispatch } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();
  dispatch(showContactsList(false));
  return (
    <Title>An easy way to backup phone numbers of friends and colleagues</Title>
  );
}
