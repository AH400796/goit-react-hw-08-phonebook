import { useDispatch } from 'react-redux';
import { showEditingForm } from 'redux/contactsFormSlice';
import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  ListItemButton,
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

  return (
    <UserWrapper>
      <Wrapper>
        <TiUser size={25} color={'#09139c'} />
        <ListItem>{name}</ListItem>
      </Wrapper>
      <NumberWrapper>
        <BsTelephoneForwardFill size={18} color={'#09139c'} />
        <ListItem>{number}</ListItem>
        <ListItemButton
          type="button"
          onClick={handleEditButton}
          disabled={isLoading}
        >
          <TiEdit size={25} color={'#09139c'} />
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
