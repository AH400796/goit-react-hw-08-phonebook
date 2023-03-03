import { useDispatch } from 'react-redux';

import { showContactsList } from 'redux/contactsFormSlice';
import { signIn } from 'redux/operations';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  LoginFormStyled,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
  Wrapper,
} from './SignInForm.styled';

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(13).required(),
});

const initialsValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const dispatch = useDispatch();

  const handleSubmitForm = (values, { resetForm }) => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
    dispatch(showContactsList(true));
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      {props => (
        <LoginFormStyled>
          <Wrapper>
            <InputLabel>
              Email
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrWrapper>
                <ErrorMessage name="email" />
              </ErrWrapper>
            </InputLabel>
            <InputLabel>
              Password
              <Input type="password" name="password" placeholder="********" />
              <ErrWrapper>
                <ErrorMessage name="password" />
              </ErrWrapper>
            </InputLabel>
          </Wrapper>
          <Button
            type="submit"
            disabled={
              (props.values.email !== '') & (props.values.password !== '')
                ? false
                : true
            }
          >
            Sign in
          </Button>
        </LoginFormStyled>
      )}
    </Formik>
  );
}
