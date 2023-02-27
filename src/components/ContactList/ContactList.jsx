import { List } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import ContactListItem from 'components/ContactListItem';

export default function ContactList() {
  const { data } = useGetContactsQuery();
  const filterValue = useSelector(selectFilter);

  const visibleContacts =
    data !== undefined
      ? data
          .filter(contact =>
            contact.name
              .toLowerCase()
              .includes(filterValue.toLowerCase().trim())
          )
          .sort((a, b) => a.name.localeCompare(b.name))
      : [];
  return (
    <List>
      {visibleContacts.length !== 0 &&
        visibleContacts.map(contact => {
          const { name, id, phone } = contact;
          return <ContactListItem key={id} id={id} name={name} phone={phone} />;
        })}
    </List>
  );
}
