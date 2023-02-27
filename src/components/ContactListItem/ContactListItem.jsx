import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  ListItemButton,
} from './ContactListItem.styled';
import { TiUser, TiDelete } from 'react-icons/ti';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { useDeleteContactMutation } from 'redux/operations';
import Spinner from 'components/Spinner';

export default function ContactListItem({ name, phone, id }) {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();

  return (
    <UserWrapper>
      <Wrapper>
        <TiUser size={25} color={'#09139c'} />
        <ListItem>{name}</ListItem>
      </Wrapper>
      <NumberWrapper>
        <BsTelephoneForwardFill size={18} color={'#09139c'} />
        <ListItem>{phone}</ListItem>
        <ListItemButton
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          {isLoading && !error ? (
            <Spinner size={25} />
          ) : (
            <TiDelete size={25} color={'#c00a0a'} />
          )}
        </ListItemButton>
      </NumberWrapper>
    </UserWrapper>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
