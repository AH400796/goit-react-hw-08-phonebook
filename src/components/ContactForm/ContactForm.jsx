import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddingForm,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
} from './ContactForm.styled';
import Loader from 'components/Loader';
import { useAddContactMutation, useGetContactsQuery } from 'redux/operations';

const initialsValues = {
  name: '',
  phone: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  phone: yup.string().min(13).max(13).phone('UA').required(),
});

export default function ContactForm() {
  const { data } = useGetContactsQuery();
  const [addContact, { error, isLoading }] = useAddContactMutation();

  const handleSubmitForm = (values, { resetForm }) => {
    const existingUsers = data.map(contact => contact.name);

    if (existingUsers.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    addContact(values);
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
          <div>
            <InputLabel>
              Name
              <Input type="text" name="name" placeholder="Andrii Hokhman" />
              <ErrWrapper>
                <ErrorMessage name="name" />
              </ErrWrapper>
            </InputLabel>
            <InputLabel>
              Phone number
              <Input type="tel" name="phone" placeholder="+380XXXXXXXXX" />
              <ErrWrapper>
                <ErrorMessage name="phone" />
              </ErrWrapper>
            </InputLabel>
          </div>
          <Button
            type="submit"
            disabled={
              (props.values.name !== '') & (props.values.phone !== '')
                ? false
                : true
            }
          >
            {isLoading && !error ? <Loader size={50} /> : ' Add contact'}
          </Button>
        </AddingForm>
      )}
    </Formik>
  );
}
