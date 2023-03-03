import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { logOut } from 'redux/operations';
import { addContactsForm, showContactsList } from 'redux/contactsFormSlice';
import { useSelector } from 'react-redux';
import {
  selectAddForm,
  selectShowContacts,
  selectEditContact,
} from 'redux/selectors';

import {
  Button,
  AuthWrapper,
  UserName,
  UserEmail,
  UserWrapper,
  Avatar,
  UserProfile,
} from './UserMenu.styled';
import { TiUser } from 'react-icons/ti';

export default function UserMenu() {
  const addForm = useSelector(selectAddForm);
  const editContact = useSelector(selectEditContact);
  const showContacts = useSelector(selectShowContacts);
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();

  const dispatch = useDispatch();

  const handleSignUp = () => {
    navigate('/register', { replace: true });
    dispatch(showContactsList(false));
    dispatch(addContactsForm(false));
  };

  const handleSignIn = () => {
    navigate('/login', { replace: true });
    dispatch(showContactsList(false));
    dispatch(addContactsForm(false));
  };

  const handleMyContacts = () => {
    navigate('/contacts', { replace: true });
    dispatch(showContactsList(!showContacts));
  };

  const handleAddNewContact = () => {
    navigate('/contacts', { replace: true });
    dispatch(addContactsForm(!addForm));
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };

  return (
    <AuthWrapper>
      {!isLoggedIn && (
        <>
          <Button type="button" onClick={handleSignUp}>
            Sign up
          </Button>
          <Button type="button" onClick={handleSignIn}>
            Sign in
          </Button>
        </>
      )}
      {isLoggedIn && (
        <UserProfile>
          <UserWrapper>
            <Avatar>
              <TiUser size={50} color={'#ffffff'} />
            </Avatar>
            <div>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </div>
          </UserWrapper>
          <Button
            type="button"
            onClick={handleMyContacts}
            disabled={editContact !== null}
          >
            {showContacts ? 'Hide my contacts' : 'Show my contacts'}
          </Button>
          <Button
            type="button"
            onClick={handleAddNewContact}
            disabled={editContact !== null}
          >
            Add new contact
          </Button>
          <Button type="button" onClick={handleLogOut}>
            Log out
          </Button>
        </UserProfile>
      )}
    </AuthWrapper>
  );
}
