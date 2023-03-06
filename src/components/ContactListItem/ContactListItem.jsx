import { useDispatch } from 'react-redux';
import { showEditingForm } from 'redux/contactsFormSlice';
import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  ListItemButton,
  NumberLink,
} from './ContactListItem.styled';
import { TiUser, TiDelete, TiEdit } from 'react-icons/ti';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { useDeleteContactMutation } from 'redux/operations';
import Spinner from 'components/Spinner';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();

  const handleEditButton = () => {
    dispatch(showEditingForm({ name, number, id }));
  };

  const tel = `tel:${number}`;

  return (
    <UserWrapper>
      <Wrapper>
        <TiUser size={25} color={'inherit'} />
        <ListItem>{name}</ListItem>
      </Wrapper>
      <NumberWrapper>
        <NumberLink href={tel}>
          <BsTelephoneForwardFill size={18} color={'inherit'} />
          <ListItem>{number}</ListItem>
        </NumberLink>
        <ListItemButton
          type="button"
          onClick={handleEditButton}
          disabled={isLoading}
        >
          <TiEdit size={25} color={'inherit'} />
        </ListItemButton>
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
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
