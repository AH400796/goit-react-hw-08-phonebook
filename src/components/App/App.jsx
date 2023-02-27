import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { LoaderWrapper, Wrapper, Title, ContactsWrapper } from './App.styled';
import { useGetContactsQuery } from 'redux/operations';

export default function App() {
  const { error, isLoading } = useGetContactsQuery();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts:</Title>
      <ContactsWrapper>
        <Filter />
        <ContactList />
        {isLoading && !error && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </ContactsWrapper>
    </Wrapper>
  );
}
