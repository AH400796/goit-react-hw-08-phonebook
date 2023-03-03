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
} from './EditContactForm.styled';
import Loader from 'components/Loader';
import { useEditContactMutation } from 'redux/operations';

import { useDispatch, useSelector } from 'react-redux';
import { selectEditContact } from 'redux/selectors';
import { showEditingForm } from 'redux/contactsFormSlice';

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().min(13).max(13).phone('UA').required(),
});

export default function EditContactForm() {
  const dispatch = useDispatch();
  const { name, number, id } = useSelector(selectEditContact);
  const [editContact, { error, isLoading }] = useEditContactMutation();

  const initialsValues = {
    name,
    number,
  };

  const handleSubmitForm = (values, { resetForm }) => {
    editContact({ id, values });
    dispatch(showEditingForm(null));
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
              {isLoading && !error ? <Loader size={50} /> : ' Edit contact'}
            </Button>
          </div>
        </AddingForm>
      )}
    </Formik>
  );
}
