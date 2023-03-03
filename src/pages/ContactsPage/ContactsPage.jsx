import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import EditContactForm from 'components/EditContactForm';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { LoaderWrapper, Title, ContactsWrapper } from './ContactsPage.styled';
import { useGetContactsQuery } from 'redux/operations';
import { useSelector } from 'react-redux';
import {
  selectAddForm,
  selectShowContacts,
  selectEditContact,
} from 'redux/selectors';

export default function ContactsPage() {
  const addForm = useSelector(selectAddForm);
  const showContacts = useSelector(selectShowContacts);
  const editContact = useSelector(selectEditContact);
  const { error, isLoading } = useGetContactsQuery();

  return (
    <>
      {addForm && editContact === null && <ContactForm />}
      {showContacts && editContact === null && (
        <ContactsWrapper>
          <Title>My contacts list</Title>
          <Filter />
          <ContactList />
          {isLoading && !error && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
        </ContactsWrapper>
      )}
      {editContact !== null && <EditContactForm />}
    </>
  );
}
