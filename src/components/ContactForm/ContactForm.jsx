import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddingForm,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
  InputWrapper,
} from './ContactForm.styled';
import Loader from 'components/Loader';
import { useAddContactMutation, useGetContactsQuery } from 'redux/operations';
import { showContactsList } from 'redux/contactsFormSlice';
import { useDispatch } from 'react-redux';

const initialsValues = {
  name: '',
  number: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().min(13).max(13).phone('UA').required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const { data } = useGetContactsQuery();
  const [addContact, { error, isLoading }] = useAddContactMutation();

  const handleSubmitForm = (values, { resetForm }) => {
    const existingUsers = data.map(contact => contact.name);

    if (existingUsers.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    addContact(values);
    dispatch(showContactsList(true));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      {props => (
        <AddingForm>
          <InputWrapper>
            <InputLabel>
              Name
              <Input type="text" name="name" placeholder="Andrii Hokhman" />
              <ErrWrapper>
                <ErrorMessage name="name" />
              </ErrWrapper>
            </InputLabel>
            <InputLabel>
              Phone number
              <Input type="tel" name="number" placeholder="+380XXXXXXXXX" />
              <ErrWrapper>
                <ErrorMessage name="number" />
              </ErrWrapper>
            </InputLabel>
          </InputWrapper>
          <div>
            <Button
              type="submit"
              disabled={
                (props.values.name !== '') & (props.values.number !== '')
                  ? false
                  : true
              }
            >
              {isLoading && !error ? <Loader size={50} /> : ' Add contact'}
            </Button>
          </div>
        </AddingForm>
      )}
    </Formik>
  );
}
